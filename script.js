
const buttons = document.querySelectorAll('.box');
document.querySelector('.play').addEventListener('click', playGame);
const arr = new Array(9).fill(null);



const playerFactory = (name) => {
    //creating new players
    return { name }
}

const player1 = playerFactory('Player1');
const player2 = playerFactory('Player2');
let sign = 'X';
//console.log({player1.sign})

const displayRender = (arr) => {
    //display being updated

}

const gameBoard = () => {




    return { arr };
}

function updateMarks() {

    //  arr[this.className.split(" ").pop()]=sign;
    this.textContent = sign;
    arr[this.className.split(" ").pop()] = sign;
    checkWinner();

    if (sign === 'X') {
        sign = 'O';
    }

    else {
        sign = 'X';
    }





}

function playGame() {




}


function checkWinner() {


    for (let j = 0; j < 3; j++) {


        if (arr[j] === arr[j + 3] && arr[j + 3] === arr[j + 6] && arr[j] !== null) {
            console.log('game over', arr[j], j);
        }



    }

}

buttons.forEach((div) => {

    div.addEventListener('click',
        updateMarks, { once: true });



});

