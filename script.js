
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
    if (arr.reduce((acc, val) => acc + (val === null), 0) < 5) {
        checkWinner();
    }

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
    

    //chechk vertical winner
    for (let j = 0; j < 9; j++) {
        if (j < 3 && arr[j] === arr[j + 3] && arr[j + 3] === arr[j + 6] && arr[j]!=null) {
            console.log(j);
            alert(`${arr[j]} won it`);
            break;
        }
       
        //for horizontal
        else if (arr[j] === arr[j + 1] && arr[j + 1] === arr[j + 2] && j % 3 === 0 && arr[j]!=null) {
            console.log('game over', arr[j], j);
            alert(`${arr[j]} won it`);
            break;

        }
        //for left diagona;l 
        else if (arr[j] === arr[j + 4] && arr[j + 4] === arr[j + 8] && j % 3 === 0 && arr[j]!=null) {
            console.log('game over', arr[j], j);
            alert(`${arr[j]} won it`);
            break;

        }
        //for right diagonla
        else if (arr[j] === arr[j + 2] && arr[j + 4] === arr[j + 2] && j % 3 === 0 && arr[j]!=null) {
            console.log('game over', arr[j], j);
            alert(`${arr[j]} won it`);
            break;

        }
        //for tie
        else if((arr.reduce((acc, val) => acc + (val === null), 0) ===0)){
            alert(`its a tie`);
            break;
        }
    }



}

buttons.forEach((div) => {

    div.addEventListener('click',
        updateMarks, { once: true });
});

