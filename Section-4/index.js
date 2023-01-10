console.log("-First exercise-");
let person = {
    name: "person",
    age: 30,
    country: "USA"
}

function logData() {
    let message = person.name + " is " + 30 +  " years old and lives in the " + person.country;
    console.log(message);
}
logData();

// Conditional practice
console.log("-Conditional practice-")
let age = 77;

if (age < 6) {
    console.log("Free!");
} else if (age < 18) {
    console.log("Child discount");
} else if (age < 27) {
    console.log("Student discount");
} else if (age < 67) {
    console.log("Full price")
} else {
    console.log("Senior citizen discount");
}

// Loop practice
console.log("-Loop practice-")
let countries = ["USA", "Canada", "Mexico"]
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}

console.log("-Push, pop, unshift, shift practice-");
// Push, pop, unshift, shift practice
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
// Add China to the front
// Add Pakistan to the end
// Pop: remove from the end 
// Push: add to the end
largeCountries.pop();
largeCountries.push("Pakistan");
// Shift: remove from the front
// Unshift: add to the front
largeCountries.shift();
largeCountries.unshift("China");
console.log(largeCountries);

// Return random item from array
console.log("-Return random item from array-")
let hands = ["Rock", "Paper", "Scissors"];

function randomHand() {
    let randIndex = Math.floor(Math.random() * 3);
    return hands[randIndex];
}
console.log(randomHand());