document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event){

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        setTimeout(() => {
            if(playerTime==0){
                alert("o jogo acabou, e o vencedor foi o jogador de escudos")
                cont[0] = cont[0] + 1
                resulto.innerHTML = "&#X1F6E1 = "+cont[0]
            }else{
                alert("o jogo acabou, e o vencedor foi o jogador de espadas")
                cont[1] = cont[1] + 1
                resultx.innerHTML = "&#X2694 = "+cont[1]
            }
            
        },10)
    };
    updateSquares()

}

function updateSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let position = square.id
        let symbol = board[position]

        if(symbol!=''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })

}

function reset(){
    playerTime = 0;
    board =  ['','','','','','','','',''];
    gameOver = false;

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.innerHTML = `<div></div>`
    })
}

