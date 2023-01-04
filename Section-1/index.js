// ctrl + k + c

let count = 0;
let countEl = document.getElementById("count-el");
console.log(countEl);

function increment() {
    count++;
    countEl.innerText = count;
}

function save() {
    console.log(count);
}