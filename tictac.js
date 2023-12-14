let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0 = true
//Winning Pattern in 2D Array formate.
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


// Game Reset functionality.
const resetGame = () => {
    turn0 = true;
    msgContainer.classList.add("hide");
    enableBoxes();
}

// Box Condition. When will be 'O' and 'X';
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerHTML = 'O';
            turn0 = false;
        }
        else {
            box.innerHTML = 'X';
            turn0 = true;
        }
        box.disabled = true;
        

        // Function For Check who is winner.
        checkWinner();
    });
});

// Once winner is decided then all box will be disabled.
const DisableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, The winner is  "${winner}"`;
    msgContainer.classList.remove("hide");

    DisableBoxes();
}

// this function check who is winner.
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }


}

// this is the Reset game button to restart game after winning.
newGameBtn.addEventListener("click", resetGame);

// this is the Reset game button to reset game while playing.
resetBtn.addEventListener("click", resetGame);
