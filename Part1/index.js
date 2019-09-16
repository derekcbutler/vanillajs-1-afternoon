var board = [];

function play(clickedId){
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);
    
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X'
        board[clickedId] = 'X';
    } else{
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }
    console.log(board);


const topLeft = board[0];
const topMiddle = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight = board[5];
const bottomLeft = board[6];
const bottomMiddle = board[7];
const bottomRight = board[8];

//HORIZONTAL
if(topRight !== undefined && topRight === topMiddle && topLeft === topRight){
    alert( `${topRight} is the winner`);
}
else if(middleRight !== undefined && middleRight === middleCenter && middleLeft === middleRight){
    alert(`${middleRight} is the winner`)
}
else if(bottomRight !== undefined && bottomRight === bottomMiddle && bottomLeft === bottomRight){
    alert(`${bottomRight} is the winner`)
}

//VERTICAL
if(topRight !== undefined && topRight === middleRight && bottomRight === bottomRight){
    alert(`${topRight} is the winner`)
}
else if(topMiddle !== undefined && topMiddle === middleCenter && bottomMiddle === topMiddle){
    alert(`${topMiddle} is the winner`)
}
else if(topLeft !== undefined && topLeft === middleLeft && bottomLeft === topLeft){
    alert(`${topLeft} is the winner`)
}

//DIAGONAL
if(topRight !== undefined && topRight === middleCenter && bottomLeft === topRight){
    alert(`${topRight} is the winner`)
}
else if(topLeft !== undefined && topLeft === middleCenter && bottomRight === topLeft){
    alert(`${topLeft} is the winner`)
}


var boardFull = true;
    for(let i = 0; i <= 8; i++){
        if(board[i] === undefined){
            boardFull = false;
            }
        }
         if(boardFull === true){
             alert("Cat's game!");
         }
};