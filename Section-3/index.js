// Backjack rules
// less than 21 (good)
// equal to 21 (win!)
// greater than 21 (lose)

let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el"); // element with id sum-el
let cardsEl = document.getElementById("cards-el");

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "BlackJack! You win!";
    } else {
        isAlive = false;
        message = "You lose!";
    }
    messageEl.textContent = message;
}