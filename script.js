const playerFactory = (name, sign) => {
    //creating new players
    return { name, sign }
}

const displayRender = (arr) => {
    //display being updated

}

const gameBoard = () => {
    let arr = [[[], [], []], [[], [], []], [[], [], []]];


    const player1 = playerFactory('Player1', 'X');
    const player2 = playerFactory('Player2', 'O');


    console.log(arr);

    return { arr };
}

function updateMarks() {
    const buttons = document.querySelectorAll('.box');
    buttons.forEach((div) => {

        div.addEventListener('click', () => {
            div.textContent = sign;
        });



    });
}

console.log(updateMarks());
/*
function deleteToggle(){
    const buttons = document.querySelectorAll('button');
    const checkbox=document.querySelectorAll('checkbox');
    console.log(checkbox);
    console.log(buttons);
    
    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
    
    
    
      // and for each one we add a 'click' listener
      if(output.contains(button)){
      button.addEventListener('click', () => {
        myLibrary[button.className.split(" ").pop()].setRead();
        console.log("yes it come in event listner");
    
      });
    
    
    }
    });
    
    }*/