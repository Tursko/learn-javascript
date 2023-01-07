// Backjack rules
// less than 21 (good)
// equal to 21 (win!)
// greater than 21 (lose)

let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard + 4;
let hasBlackJack = false;
let isAlive = true;

let message = "";

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "BlackJack! You win!";
    } else {
        isAlive = false;
        message = "You lose!";
    }
    console.log(message);
}