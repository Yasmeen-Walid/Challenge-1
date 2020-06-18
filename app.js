
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
var win = [
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
        func1()
}


function func(){ 
    var win = [];
    if(player1.length === 3){
        for(var i = 0; i < win.length; i++){
            //console.log(win[i])
            for(var j = 0; j < win[i].length; j++){
                console.log(win[i][j])
                if(player1[j] !== win[i][j]){
                   return false;
                }
            }
            document.getElementByClassId("result").innerHTML("player 1 win")
        
        }    
    }
}

function func(){ 
    var win = [];
    if(player2.length === 3){
        for(var i = 0; i < win.length; i++){
            //console.log(win[i])
            for(var j = 0; j < win[i].length; j++){
                console.log(win[i][j])
                if(player2[j] !== win[i][j]){
                   return false;
                }
            }
            document.getElementByClassId("result").innerHTML("player 2 win")
        
        }    
    }
}