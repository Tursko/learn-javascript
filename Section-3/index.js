let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el"); // element with id sum-el
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    // Random number between 1 - 13
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum === 1) {
        randomNum = 11;
    } else if (randomNum > 10) {
        randomNum = 10;
    }
    return randomNum;
}

function startGame() {
    let isAlive = true;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    // Update list of cards
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

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
    let card = getRandomCard();
    sum += card;
    cards.push(card);

    renderGame();
}