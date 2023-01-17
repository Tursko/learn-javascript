// Practice using localStorage
localStorage.setItem("link1", "google.com");
console.log(localStorage.getItem("link1"));

localStorage.clear();

// Store array in local storage by converting to JSON
let array = ["something1", "something2", "something3"];
localStorage.setItem("array", JSON.stringify(array));
let array2 = JSON.parse(localStorage.getItem("array"));
console.log(array2);

// More practice converting, pushing, reconverting
let myArrayString = `["entry1", "entry2"]`;
let myArray = JSON.parse(myArrayString);
myArray.push("entry3");
myArrayString = JSON.stringify(myArray);
console.log(typeof myArrayString);
console.log(myArrayString);