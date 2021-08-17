document.addEventListener('DOMContentLoaded',()=>{
    let squares= document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event){
    
    click ++;
    let square = event.target;
    let position = square.id

   if(handleMove(position)){
        
       setTimeout(()=>{
           if(playerTime == 0){
               let vencedor = document.getElementById("p1")
               result = document.getElementById("resultado")
               document.getElementById("resultado").style.display="block";
               document.getElementById("stage").style.display="none";
               document.getElementById("hidep1").style.display="none";
               document.getElementById("hidep2").style.display="none";
               result.innerHTML = "O vencedor é " + vencedor.value;

               
            //alert("O jogo acabou - O vencedor foi o Jogador")
        }else{
            let vencedor = document.getElementById("p2")
            result = document.getElementById("resultado")
            document.getElementById("resultado").style.display="block";
            document.getElementById("stage").style.display="none";
            document.getElementById("hidep1").style.display="none";
            document.getElementById("hidep2").style.display="none";
            result.innerHTML = "O vencedor é " + vencedor.value;
        }
       }, 10)

       document.getElementById("restart").style.display="inline-block";
        
   }else if(click == 9){
    setTimeout(()=>{
        result = document.getElementById("resultado")
        document.getElementById("resultado").style.display="block";
        document.getElementById("stage").style.display="none";
        document.getElementById("hidep1").style.display="none";
        document.getElementById("hidep2").style.display="none";
        result.innerHTML = "O jogo deu empate!";
       }, 10)

       document.getElementById("restart").style.display="inline-block";
   }
   updateSquare(position);

}

function updateSquare(position) {
    let square =  document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updtSquares(){

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) =>{

        let position = square.id;
        let symbol = board[position];

        
            square.innerHTML = ''
       

    })
    
}
