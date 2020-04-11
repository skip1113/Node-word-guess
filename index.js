//Requiring inquirer to prompt, and word file
var inquirer = require('inquirer');
var Word = require("./word.js");

var guessLeft = 10;
var chosenWord = "";
var randomWord = "";
var wordList = ["black panther", "spider man", "thor", "iron man", "captain america", "hulk", "hawkeye", "captain marvel", "black widow", "ant man", "wolverine", "doctor strange", "ghost rider", "blade", "daredevil", "punisher"];

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
    var random = Math.floor(Math.random() * wordList.length);
    randomWord = wordList[random];
    // console.log(randomWord);
    chosenWord = new Word(randomWord);
    console.log("You have 10 Guesses to find the correct Hero!");
}
// beginning();
startGame();