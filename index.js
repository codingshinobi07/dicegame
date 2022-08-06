var num = Math.floor(Math.random() * 6) + 1;
var randdice = "dice" + num + ".png";
var ransource = "images/" + randdice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", ransource);

var num2 = Math.floor(Math.random() * 6) + 1;
var randdice2 = "dice" + num2 + ".png";
var ransource2 = "images/" + randdice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", ransource2);

if (num > num2) {
  document.querySelector("h1").innerHTML = "PLAYER 1 WINS 😶‍🌫️😶‍🌫️";
} else if (num < num2) {
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS 🤑🤑";
} else {
  document.querySelector("h1").innerHTML = "DRAW 🙌";
}
