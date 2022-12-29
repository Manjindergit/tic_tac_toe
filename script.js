
const buttons = document.querySelectorAll('.box');
document.querySelector('.play').addEventListener('click', playGame);
const arr = new Array(9).fill(null);



const playerFactory = (name, sign) => {
    //creating new players
    return { name, sign }
}

const player1 = playerFactory('Player1', 'X');
const player2 = playerFactory('Player2', 'O');
let sign=player1.sign;

const displayRender = (arr) => {
    //display being updated

}

const gameBoard = () => {




    return { arr };
}

function updateMarks(index) {
    console.log('insuide update narks');
  //  arr[this.className.split(" ").pop()]=sign;
    this.textContent=sign;
    if(sign==='X'){
        sign='O';
    }

    else{
    sign='X';
    }


    


}

function playGame() {

    

   
}
//console.log(updateMarks());
function signSwap(a){
    console.log('inside signswap');
    if(a==='X'){
        a='O';
    }

    else{
    a='X';
    }
    return a;
}

function checkWinner(){
    
    for (let index = 0; index < length; index++) {
        console.log(arr);
}
signSwap();
}

buttons.forEach((div) => {

    div.addEventListener('click',
        updateMarks, signSwap,console.log(sign),{ once: true });



});

