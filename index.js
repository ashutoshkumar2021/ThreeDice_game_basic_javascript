var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumberimg = "dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomNumberimg);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomNumberimg2 = "dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomNumberimg2);
var randomNumber3 = Math.floor(Math.random() * 6) + 1;
var randomNumberimg3 = "dice" + randomNumber3 + ".png";
var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src", randomNumberimg3);
//document.querySelector("img").setAttribute("src",dice2.png);
if ((randomNumber1 > randomNumber2) && (randomNumber1 > randomNumber3)) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS!";
}

else if ((randomNumber2 > randomNumber1) && (randomNumber2>randomNumber3)) {
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS!";
}

else if ((randomNumber3 > randomNumber1) && (randomNumber3 > randomNumber2)){
      document.querySelector("h1").innerHTML = "PLAYER 3 WINS!";
}

else if ((randomNumber1 == randomNumber2) && (randomNumber2==randomNumber3) && (randomNumber1 == randomNumber3)) {
  document.querySelector("h1").innerHTML = "DRAW!";
}
else if((randomNumber1>randomNumber2) && (randomNumber1>randomNumber3) && (randomNumber2==randomNumber3)){
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS!";
}
else if((randomNumber2>randomNumber1) && (randomNumber2>randomNumber3) && (randomNumber1==randomNumber3)){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS!";
}
else if((randomNumber3>randomNumber2) && (randomNumber3>randomNumber1) && (randomNumber2==randomNumber1)){
    document.querySelector("h1").innerHTML = "PLAYER 3 WINS!";
}
