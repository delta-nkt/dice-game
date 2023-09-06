
var randomNumber1 =  Math.floor((Math.random() * 6) + 1);
// player1 dice number
function play1(){
    
    var image1 = "dice"+randomNumber1+".png";
    var random_image= "images/"+ image1;
    document.querySelectorAll("img")[0].setAttribute("src",random_image);

}
// player2 dice number and logic
function play2(){
    var randomNumber2 =  Math.floor((Math.random() * 6) + 1);
    var image1 = "dice"+randomNumber2+".png";
    var random_image= "images/"+ image1;
    document.querySelectorAll("img")[1].setAttribute("src",random_image);
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML = "player 1 wins!!!🚩";
    }
    else if(randomNumber2>randomNumber1){
        document.querySelector("h1").innerHTML = "player 2 wins!!!🚩";
    }
    else{
        document.querySelector("h1").innerHTML = "🚩Match Drawn !!!"
    }
    
}

// play again button
function retry(){location.reload()};
