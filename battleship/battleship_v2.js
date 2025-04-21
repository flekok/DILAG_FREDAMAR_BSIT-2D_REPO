var randomloc = Math.floor(Math.random() * 5);

var location1 = randomloc;
var location2 = location1 + 1;
var location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while(!isSunk) {
    guess = prompt("Ready!, Aim, Fire! (Enter a number 0-6)")

    if (guess == null) {
        alert("Thankl you for playing!")
        break;
    }
}

var accuracy = (guesses > 0 ? (hits/guesses) * 100 :0).tolfixed(2);

var stats = "You took" + guesses + "gusses to sink the battleship!" + "\n" + "Accuracy:" + accuracy + "%";

alert(stats);