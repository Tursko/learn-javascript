let myEntries = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    if (inputEl.value !== "") {
        myEntries.push(inputEl.value);
        inputEl.value = "";
        console.log(myEntries);
    }

    renderEntries();
});

function renderEntries() {
    let listItems = "";
    for (let i = 0; i < myEntries.length; i++) {
        listItems += 
        `<li>
            <a target='_blank' href='${myEntries[i]}'>
                ${myEntries[i]}
            </a>
        </li>`;
    }
    ulEl.innerHTML = listItems;
}