let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let turnO = true;
let newGame = document.querySelector("#newGame");
let winnerMsg = document.querySelector(".winner");

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>{
    turnO = true;
    enableBoxes()
    winnerMsg.classList.add("hide");
}

const enableBoxes = () =>{
    boxes.forEach(box =>{
        box.disabled = false;
        box.innerText = "";
    })
}
boxes.forEach(box => {
    box.addEventListener("click", () =>{
        // console.log("box was clicked");
        if(turnO){
            box.innerText = 'O';
            box.style.color = "blue";
            turnO = false;
        }else{
            box.innerText = 'X';
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        checkWinner()

    })
    
    
});

const showWinner = (winner) =>{
    winnerMsg.innerText = `Congratulations, Winner is ${winner}`;
    winnerMsg.classList.remove("hide");
}
const checkWinner = () => {
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log(`Winner ${pos1Val}`)
                showWinner(pos1Val);
                boxes.forEach(box =>{
                    box.disabled = true;
                })
              
            }
        }
    }
}
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
