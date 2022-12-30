
const buttons = document.querySelectorAll('.box');
document.querySelector('.play').addEventListener('click', playGame);

const playerFactory = (name) => {
    //creating new players
    return { name }
}

let sign = 'X';

const displayRender = (arr) => {
    //display being updated
}

const gameBoard = () => {

    const arr = new Array(9).fill(null);
    return { arr };
}

let game = gameBoard();
let arra = game.arr;


function updateMarks() {

    this.textContent = sign;
    arra[this.className.split(" ").pop()] = sign;
    if (arra.reduce((acc, val) => acc + (val === null), 0) < 5) {
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

    const player1 = playerFactory('Player1');
    const player2 = playerFactory('Player2');

}


function checkWinner() {

    //chechk vertical winner
    for (let j = 0; j < 9; j++) {
        if (j < 3 && arra[j] === arra[j + 3] && arra[j + 3] === arra[j + 6] && arra[j] != null) {
            console.log(j);
            alert(`${arra[j]} won it`);
            break;
        }

        //for horizontal
        else if (arra[j] === arra[j + 1] && arra[j + 1] === arra[j + 2] && j % 3 === 0 && arra[j] != null) {
            console.log('game over', arra[j], j);
            alert(`${arra[j]} won it`);
            break;

        }
        //for left diagona;l 
        else if (arra[j] === arra[j + 4] && arra[j + 4] === arra[j + 8] && j % 3 === 0 && arra[j] != null) {
            console.log('game over', arra[j], j);
            alert(`${arra[j]} won it`);
            break;

        }
        //for right diagonla
        else if (arra[j] === arra[j + 2] && arra[j + 4] === arra[j + 2] && (j + 2) % 3 === 0 && arra[j] != null) {
            console.log('game over', arra[j], j);
            alert(`${arra[j]} won it`);
            break;

        }
        //for tie
        else if (arra.reduce((acc, val) => acc + (val === null), 0) ===) {
            console.log('game over', arra[j], j);
            alert(`its a tie`);
            break;

        }
    }



}

buttons.forEach((div) => {
    div.addEventListener('click',
        updateMarks, { once: true });
});

