console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById("node1");

node1.textContent = "I used the getElementById(`node1`) method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2");

node2[0].textContent = "I used the getElementByClassName(`node2`) method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3 = document.getElementsByTagName("h3");

for (let ele of h3) {
    ele.textContent = "I used the getElementByTagName(`h3`) method to access all of these";
}


/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let parent = document.getElementById("parent");

let p = document.createElement("p");
let a = document.createElement("a");

p.textContent = "I am a <p> tag";
a.textContent = "Google Us";
a.href = "https://google.com";
a.target = "_blank";

parent.appendChild(p);

//setTimeout(() => {
    parent.insertBefore(a, p);
//}, 3000);
// TODO: Append the created node to the parent node using the element.appendChild() method

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

let parent3 = document.getElementById("exercise-container3");
let N1 = document.getElementById("N1");

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let input = document.createElement("input");
input.value = "Replaced N1 child";
input.focus();

parent3.replaceChild(input, N1);

// TODO: Remove the "New Child Node"
parent3.removeChild(input);

/*----------- Exercise #4: ANIMATIONS ----------- */
// TODO: Write your JavaScript here to make the red box go from left to right
let container = document.querySelector("#container")
let box = document.querySelector("#box")
// let interval = setInterval(move, 10);
let x = 0;
let y = 0;
let xEdge = container.clientWidth - box.clientWidth;
let yEdge = container.clientHeight - box.clientHeight;
let dir = "right";
let unit = 10;

/*let interval = setInterval(() => {
    if (dir == "right") {
        moveY(unit);
    } else if (dir == "down") {
        moveX(unit);
    } else if (dir == "left") {
        moveX(-unit);
    } else {
        moveY(-unit);
    }
}, 10); */

function moveX(unit) {
    x += unit;
    box.style.left = `${x}px`;

    if (x >= xEdge) {
        dir = "down";
    } else if (x <= 0) {
        dir = "up";
    }
}

function moveY(unit) {
    y += unit;
    box.style.top = `${y}px`;

    if (y >= yEdge) {
        dir = "left";
    } else if (y <= 0) {
        dir = "right";
    }
}

// BONUS - Make the red box go all the way around the perimeter of the green box

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let main = document.querySelector(".root");

    let container = document.createElement("div");
    container.classList.add("modal container");

    let modal = document.createElement("div");
    let modalTitle = document.createElement("h2");
    modalTitle.textContent = "Modal Title";
    let modalText = document.createElement("p");
    modalText.textContent = "This is the text content of the modal!";
    let modalBtn = document.createElement("button");
    modalBtn.textContent = "Close";

    
});