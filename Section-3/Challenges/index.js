// looping until 10 using a for loop
console.log("-Count to 10 using a loop-")
for (let count = 10; count < 21; count += 1) {
    console.log(count);
}

console.log("-count from 10 to 100 in steps of 10-");
for (let i = 10; i <= 100; i+=10) {
    console.log(i);
}

// Now looping through arrays
console.log("-Loop through the messages array and log each message-")
let messages = [
    "This is a message",
    "This is another message",
    "Last message!"
]

for (let i = 0; i < messages.length; i++) {
    console.log(messages[i]);
}

// Render a sentence on a <p> element using an array and loop
let words = [
    "Hello",
    "my",
    "name",
    "is",
    "JavaScript!"
]
let greetingEl = document.getElementById("greeting-el");
let sentence = "";
for (let i = 0; i < words.length; i++) {
    sentence += words[i] + " ";
}
console.log(sentence);
greetingEl.textContent = sentence;

console.log("-Random number generation-");
// Generates a random number between 0 and 1 (not inclusive to 1)
function rollDice() {
    return Math.floor(Math.random()*6) + 1;
}
console.log(rollDice());

// Obects - store data
console.log("-Intro to objects-")
let course = { 
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Name Name",
    length: 63,
    level: 2,
    isFree: true, 
    tags: ["html", "css"]
}
console.log(course.tags);
console.log(course["tags"]); // bracket notation

let castle = {
    title: "Castle Living",
    price: 190,
    isSuperHost: true,
    images: ["image1", "image2", "image3"]
}
console.log(castle.images);