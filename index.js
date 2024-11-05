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

// Get the first h1 element and apply various styles to it, then log the styles to the console
const header = document.querySelector("h1");

// Apply styles to the header element
header.style.textTransform = "uppercase";
header.style.fontSize = "2rem";
header.style.padding = "1rem";
header.style.border = "1px solid black";
header.style.borderRadius = "5px";
header.style.textAlign = "center";

// Log the applied styles to the console
console.log(header.style);

// Reset the color style of the header element
header.style.color = "";

console.log(header.className);

header.className = "title";

const jollofParagraph = document.getElementById("jollof");
jollofParagraph.classList.add("test", "nigerian");
jollofParagraph.classList.remove("test");
jollofParagraph.classList.replace("nigerian", "american");
console.log(jollofParagraph.classList.contains("american"));
console.log(jollofParagraph.classList.contains("nigerian"));
console.log(jollofParagraph.classList);

// Get the element with the ID "italics" and log its parent and grandparent nodes to the console
const italicizedText = document.getElementById("italics");
console.log(italicizedText.parentNode);
console.log(italicizedText.parentNode.parentNode);

// Get the element with the ID "container"
const container = document.getElementById("container");

// Get the children of the container element and log them to the console
const containerChildren = container.children;
console.log(containerChildren);

// Get all child nodes of the container element (including text nodes) and log them to the console
const containerChildNodes = container.childNodes;
console.log(containerChildNodes);

// Get the button element with the ID "myButton" and log it to the console
const myButton = document.getElementById("myButton");
console.log(myButton);

// Add a click event listener to the button that shows an alert when clicked
myButton.addEventListener("click", () => {
  alert("Button clicked");
});

// Add an oncopy event handler to the header element that shows an alert when text is copied
header.oncopy = () => {
  alert("You copied the text");
};
