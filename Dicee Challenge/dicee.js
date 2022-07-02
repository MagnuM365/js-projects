let randomDice1 = Math.floor(Math.random() * 6) + 1;
let randomDice2 = Math.floor(Math.random() * 6) + 1;

document.getElementById('img1').src = "images/dice" + randomDice1 + ".png";
document.getElementById('img2').src = "images/dice" + randomDice2 + ".png";

if (randomDice1 > randomDice2) {
    document.getElementById('refresh').innerHTML = "🚩 Player1 wins";
} else if (randomDice1 < randomDice2) {
    document.getElementById('refresh').innerHTML = "Player2 wins 🚩";
} else {
    document.getElementById('refresh').innerHTML = "Its draw! Roll again";
}