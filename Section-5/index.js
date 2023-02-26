let myEntries = [];
const entriesName = "myEntires";

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

const localStorageEntries = JSON.parse(localStorage.getItem(entriesName));
 if (localStorageEntries) {
    myEntries = localStorageEntries;
    render(myEntries);
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.removeItem(entriesName);
    myEntries = [];
    render(myEntries);
})

inputBtn.addEventListener("click", function() {
    if (inputEl.value !== "") {
        myEntries.push(inputEl.value);
        inputEl.value = "";
        // Convert to JSON and store in localStorage
        localStorage.setItem(entriesName, JSON.stringify(myEntries));
    }

    render(myEntries);
});

function render(aEntries) {
    let listItems = "";
    for (let i = 0; i < aEntries.length; i++) {
        listItems += 
        `<li>
            <a target='_blank' href='${aEntries[i]}'>
                ${aEntries[i]}
            </a>
        </li>`;
    }
    ulEl.innerHTML = listItems;
}