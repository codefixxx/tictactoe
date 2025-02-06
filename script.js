let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turnO = true;
let isThereAWinner = false;
let winning_conditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
    }
}
newGameBtn.addEventListener("click", function reset() {
    msgContainer.classList.add("hide");
    turnO = true;
    isThereAWinner = false;
    boxes.forEach(box => { box.innerText = ""; })
    enableBoxes();

})
resetBtn.addEventListener("click", function reset() {
    msgContainer.classList.add("hide");
    turnO = true;
    isThereAWinner = false;
    boxes.forEach(box => { box.innerText = ""; })
    enableBoxes();

})


const showWinner = (winner) => {
    isThereAWinner = true;
    msg.innerText = `Congratualtions, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkNotDraw = () => {
    let empty = false;
    for (box of boxes) {
        if (box.innerText === "") {
            empty = true;
        }
    }
    return empty;
}

const Draw = () => {
    if (checkNotDraw() === false && isThereAWinner===false) {
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
}


function checkWinner(){
    for (condition of winning_conditions) {
        let pos1val = boxes[condition[0]].innerText;
        let pos2val = boxes[condition[1]].innerText;
        let pos3val = boxes[condition[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val &&pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
                
                
            } 
            
        }
    }

    Draw();
}