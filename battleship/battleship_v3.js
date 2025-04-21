
// declaring variable

var randomloc = Math.floor(Math.random() * 5);
var shipLocation = [randomloc, randomloc + 1, randomloc + 2];

var guess
var hits = 0;
var guesses = 0;
var isSunk = false;

// Game Logic

while (!isSunk) {
    guess = prompt("Choose a number 0 - 6.");

    if (guess == null) {
        alert("Game Over");
        break;
    }

    guess = parseInt(guess, 10);

    if (isNaN(guess) || guess < 0 || guess > 6) {
        alert("Enter a valid number between 0 and 6!");
        continue;
    }
// SKIP THE CODE

guesses ++;
 
 const hitIndex = shipLocation.indexOf(guess);

if (hitIndex !== -1) {
    alert("hit!")
    shipLocation.splice(hhitIndex, 1);
    hit++;
    if (shipLocation.length === 0) {
        isSunk = true;
    }
}else {
    alert("Miss!")
}
}

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);

var accuracy = "You took" + "guesses to sink the battleship" + "\n" + "Accuracy: " + accuracy + "%";

alert(stats)
