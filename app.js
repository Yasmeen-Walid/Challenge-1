
// var play = document.getElementsByClassName("tds");

// for(var i = 0; i < play.length ; i++) {
//   play[i].addEventListener("click", function event(this)  {
//     console.log(this);
//    //play[i].innerHTML = "x";
//    //console.log(i)
//    document.getElementById("1").innerHTML = "X"
//    document.getElementById("2").innerHTML = "X"
//   })
// }

var count = 0;
var player1 = [];
var player2= [];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function playing(elem) {
    //console.log(elem.id)
        if(count % 2 === 0 ){
            elem.innerHTML = "X";  
            player1.push(elem.id)
        }else{
            elem.innerHTML = "O";
            player2.push(elem.id)       
        }
        count+=1;  
        func()
}

function func(){
    if(winningConditions.includes(player1)){
        console.log("player 1 win")
    }
}
