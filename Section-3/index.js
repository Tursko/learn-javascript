let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el"); // element with id sum-el
let cardsEl = document.getElementById("cards-el");


function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
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

function newCard() {
    let card = 7;
    sum += card;
    cards.push(card);

    renderGame();
}