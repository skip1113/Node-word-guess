//Requiring inquirer to prompt, and word file
var inquirer = require('inquirer');
var Word = require("./word.js");

var guessLeft = 0;
var chosenWord = "";
var randomWord = "";
var wordList = ["Black Panther", "Spider Man", "Thor", "Iron Man", "Captain America", "Hulk", "Hawkeye", "Captain Marvel", "Black Widow", "Ant Man", "Wolverine", "Doctor Strange", "Ghost rider", "Blade", "Daredevil", "Punisher"];
var random = 0;
//Prompting user basic instructions
function beginning() {
    inquirer.prompt([
        {
            type: "input",
            name: "intro",
            message: "Welcome! Guess a letter to spell out a Marvel Superhero!"
        },
        {
            type: "input",
            name: "guess",
            message: "Type a letter and press enter, you have 10 guesses!"
        },
        {
            type: "confirm",
            name: "ready",
            message: "Are you ready?!"
        },
        {
            type: "input",
            name: "goodLuck",
            message: "Good luck!!"
        }
    ])
};
function startGame() {
    // if (wordList.length < 2) {
    //     wordList = ["Black Panther", "Spider Man", "Thor", "Iron Man", "Captain America", "Hulk", "Hawkeye", "Captain Marvel", "Black Widow", "Ant Man", "Wolverine", "Doctor Strange", "Ghost rider", "Blade", "Daredevil", "Punisher"];

    // }
    var random = Math.floor(Math.random() * wordList.length);
    randomWord = wordList[random];
    // console.log(randomWord);
    chosenWord = new Word(randomWord);
    chosenWord.hiddenLetter();
    if (random > -1) {
        wordList.splice(random, 1);
    }
    console.log("You have 10 Guesses to find the correct Hero!");
    promptUser();
};
function promptUser(){
    if (guessLeft < 10) {
        console.log(chosenWord.letterForWord());
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "Pick a letter and press enter."
            }
        ]).then(function(input) {
            checkInput(input);
        });
    }
    else {
        console.log("You're out of guesses! Better luck next time.");
        console.log(randomWord);
        randomWord = "";
        chosenWord = "";
        counter = 0;
        startGame();
    }
}
function checkInput(data) {
    if ((data.letter.length === 1) && /^[a-zA-Z]+$/.test(data.letter)) {
        var checking = data.letter.toUpperCase();
        var hiddenWord = chosenWord.letterForWord();
        chosenWord.checkLet(checking);
        if (hiddenWord === chosenWord.letterForWord()) {
            console.log("Wrong Letter, try again");
            guessLeft++;
            console.log((10 - guessLeft) + " Guesses Remaining");
            promptUser();
        }
        else {
            correctCheck();

        };
    };
};
function correctCheck() {
    console.log("Correct Guess!");
    if (randomWord.replace(/ /g,"") == (chosenWord.letterForWord()).replace(/ /g,"")) {
        console.log(chosenWord.letterForWord);
        console.log("You Win!");
        randomWord = "";
        chosenWord = "";
        random = 0;
        guessLeft = 0;
        startGame();
    }
}
// beginning();
startGame();