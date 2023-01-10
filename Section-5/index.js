let myEntries = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", function() {
    if (inputEl.value !== ""){
        myEntries.push(inputEl.value);
        inputEl.value = "";
        console.log(myEntries);
    }
})