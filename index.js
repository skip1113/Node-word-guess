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
    
    random = Math.floor(Math.random() * wordList.length);
    randomWord = wordList[random];
    // console.log("=============================================")

    // console.log(randomWord);
    chosenWord = new Word(randomWord);
    chosenWord.hiddenLetter();
    if (random > -1) {
        wordList.splice(random, 1);
    }
    console.log("=============================================");
    console.log("You have 10 Guesses to find the correct Hero!");
    console.log("=============================================");

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
        ]).then(function(results) {
            // console.log(results);
            checkInput(results);
        });
    }
    else {
        console.log("You're out of guesses! Better luck next time.");
        console.log(randomWord);
        randomWord = "";
        chosenWord = "";
        random = 0;
        guessLeft = 0;
        startGame();
    }
}
function checkInput(results) {
    if ((results.letter.length === 1) && /^[a-zA-Z]+$/.test(results.letter)) {
        // console.log(results.letter.length);
        var checking = results.letter;
        // console.log("Checking this value " + checking);
        var shownWord = chosenWord.letterForWord();
        // console.log(shownWord);
        chosenWord.checkLet(checking);
        // var checkingWord = chosenWord.checkLet(checking);
        // console.log(checkingWord);
        if (shownWord === chosenWord.letterForWord()) {
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
    // console.log("This is the chosen word " + chosenWord.letterForWord());
    // console.log("This is the random word " + randomWord);
    if (randomWord.replace(/ /g,"") == (chosenWord.letterForWord()).replace(/ /g,"")) {
        console.log(chosenWord.letterForWord());
        console.log("You Win!");
        randomWord = "";
        chosenWord = "";
        random = 0;
        guessLeft = 0;
        // startGame();
    }
    else {
        promptUser();
    }
}
// beginning();
startGame();