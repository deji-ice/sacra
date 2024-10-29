// Get the element with the ID "page-title" and log it to the console
const titleElement = document.getElementById("page-title");
titleElement.style.padding = "4rem";
titleElement.style.backgroundColor = "lightblue";
console.log(titleElement);

// Get all elements with the class name "family" and log them to the console
const famContacts = document.getElementsByClassName("family");
console.log(famContacts);
console.log(famContacts[0]);

// Get all elements with the tag name "p" and log them to the console
const allContacts = document.getElementsByTagName("p");
console.log(allContacts);

// Get the first element with the class name "work" and log it to the console
const firstWorkContact = document.querySelector(".work");
console.log(firstWorkContact);

// Get the third button inside a div and log it to the console
const thirdBtn = document.querySelector("div button:nth-child(3)");
console.log(thirdBtn);

// Get all button elements and log each one to the console
const allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  console.log(button);
});

// Get the element with the ID "topic" and set its inner HTML, then log the new inner HTML
const topic = document.getElementById("topic");
topic.innerHTML = "<p> This is the <b>new</b> topic </p>";
console.log(topic.innerHTML);

// Get the first paragraph element and log its text content and inner text
const paragraph = document.querySelector("p");
console.log(paragraph.textContent);
console.log(paragraph.innerText);

// Get the elements with the IDs "textContent" and "inner-text"
const text_content = document.getElementById("textContent");
const inner_text = document.getElementById("inner-text");

// Define a multi-line string for the address
let address = `
  ABC Street,
  Spintex Road,
  Accra,
  Ghana.
`;

// Set the text content and inner text of the respective elements to the address
text_content.textContent = address;
inner_text.innerText = address;

// Log the elements to the console
console.log(text_content, inner_text);

const imgElement = document.querySelector("img");
console.log("Before:", imgElement.getAttribute("src"));
imgElement.setAttribute("src", "new-image.jpeg");
console.log("After:", imgElement.getAttribute("src"));

console.log("before:", imgElement.getAttribute("height"));
imgElement.setAttribute("height", "100");
console.log("after:", imgElement.getAttribute("height"));

const header = document.querySelector("h1");
console.log(header)
