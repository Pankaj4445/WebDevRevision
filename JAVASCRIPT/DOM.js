// let paragraph = document.getElementById("paragraph");
// let classname = document.getElementsByClassName("heading");
// let newtag = document.querySelector("h2");
// console.log(newtag.innerHtml);
// newtag.innerText = newtag.innerText + "By Me"

// let div = document.querySelector("#box");

// div.style.backgroundColor="green";
// div.style.color = "white";
// div.style.fontSize = "20px";

// let el1 = document.createElement("button");
// el1.style.backgroundColor = "Black";
// el1.innerText = "Click Me!";
// el1.style.color = "white";
// el1.className = "jsClass";

// div.after(el1);

let button = document.createElement("button");
button.innerText = "click me";
button.style.backgroundColor = "red";
button.style.color = "white";

document.querySelector("body").prepend(button);