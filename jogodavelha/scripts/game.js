//iniciar variaveis
let board = ["","","","","","","","",""];
let playerTime = 0;
let symbols = ["x","o"];
let gameOver = false;
let click=0;
let winStates=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


function handleMove(position){
if(gameOver){
    return 
}

    if(board[position] == ''){
        board[position] = symbols[playerTime];

        gameOver= isWin();
        if(!gameOver){

            playerTime = (playerTime == 0) ? 1 : 0;

    }
    }
    return gameOver;
}

function isWin(){
    
    for(let i = 0; i<winStates.length;i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1]; 
        let pos3 = seq[2]; 

        if(board[pos1] == board[pos2] && 
            board[pos1] == board[pos3]&& 
            board[pos1]!= ''){

                return true;
            }
    }

    return false;


}

function restart(){
    gameOver = false;
    board = ["","","","","","","","",""];
    playerTime = 0;
    click=0;
    document.getElementById("restart").style.display="none";
    document.getElementById("resultado").style.display="none";
    document.getElementById("stage").style.display="block";
    document.getElementById("hidep1").style.display="block";
    document.getElementById("hidep2").style.display="block";
    
    updtSquares();
}



