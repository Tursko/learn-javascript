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
        // Alternative solution
        //const listItem = document.createElement("li");
        //listItem.textContent = myEntries[i];
        //ulEl.append(listItem);
        listItems += "<li>" + myEntries[i] + "</li>";
    }
    ulEl.innerHTML = listItems;
}