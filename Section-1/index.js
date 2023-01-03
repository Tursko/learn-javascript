//document.getElementById("count-el").innerText = 5

// ctrl + k + c

let count = 0;
let countEl = document.getElementById("count-el");
console.log(countEl);

function increment() {
    count++;
    console.log(count);
    countEl.innerText = count;
}