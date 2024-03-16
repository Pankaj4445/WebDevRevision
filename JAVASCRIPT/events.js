let btn1 = document.querySelector("button");

// btn1.ondblclick = (e) =>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// }


// const eventHandler = (evt) =>{
//     console.log("button was clicked JS")
//     console.log(evt);
// }
// btn1.addEventListener("click", eventHandler)
// let div = document.querySelector("#box");

// div.onmouseover = () =>{
//     div.innerText = "You Are Inside Div"
// }
let body = document.querySelector("body");
let toggleButton = document.createElement("button")
toggleButton.setAttribute("class", "toggle")
toggleButton.innerText = "Dark Mode";
toggleButton.style.color = "white";
toggleButton.style.backgroundColor = "Black";
let currentMode = "light"
body.prepend(toggleButton);

const modeEventHandler = (evt) =>{
    if(currentMode == "light"){
        console.log("dark");
        currentMode = "dark";
        toggleButton.innerText = "Light Mode";
        toggleButton.style.color = "black";
        toggleButton.style.backgroundColor = "white";
        body.setAttribute("class", "dark");
    }else{
        console.log("light");
        currentMode = "light";
        toggleButton.innerText = "Dark Mode";
        toggleButton.style.color = "white";
        toggleButton.style.backgroundColor = "Black";
        body.setAttribute("class", "light");
    }
}

toggleButton.addEventListener("click", modeEventHandler);



