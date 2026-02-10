// Variables        
let firstName = "Titan";
let lastName = "Tan";
let fullName = firstName + " " + lastName;

let age = 14;
let futureAge = age + 20;

// Select elements
let heading = document.querySelector("h1");
let ageParagraph = document.querySelector("#age");

// Put text into page
heading.textContent = fullName;
ageParagraph.textContent = "Age: " + age;

// Create future age sentence
let futureParagraph = document.createElement("p");
futureParagraph.textContent =
  "In twenty years, your age will be " + futureAge + " years old.";

// Put it after Age paragraph
ageParagraph.after(futureParagraph);
