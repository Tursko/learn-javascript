let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el"); // element with id sum-el
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    let card = 5;
    return card;
}

function startGame() {
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