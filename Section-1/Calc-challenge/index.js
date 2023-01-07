let num1 = 8;
let num2 = 2;

// Set the values using DOM
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
setResult("");

function setResult(result) {
    if (result !== "") {
        document.getElementById("sum-el").textContent = "Sum: " + result;
    } else {
        document.getElementById("sum-el").textContent = "";
    }
}

function add() {
    let result = num1 + num2;
    setResult(result);
}

function subtract() {
    let result = num1 - num2;
    setResult(result);
}

function divide() {
    let result = num1 / num2;
    setResult(result);
}

function multiply() {
    let result = num1 * num2;
    setResult(result);
}