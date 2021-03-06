// Requiring inquirer to prompt, and word file
const inquirer = require('inquirer');
const chalk = require('chalk');
const Word = require('./word.js');

let guessLeft = 0;
let chosenWord = '';
let randomWord = '';
const wordList = ['Black Panther', 'Spider Man', 'Thor', 'Iron Man', 'Captain America',
    'Hulk', 'Hawkeye', 'Captain Marvel', 'Black Widow', 'Ant Man',
    'Wolverine', 'Doctor Strange', 'Ghost rider', 'Blade', 'Daredevil',
    'Punisher'];
let random = 0;
// Prompting user basic instructions
inquirer.prompt([
    {
        type: 'input',
        name: 'intro',
        message: 'Welcome! Guess a letter to spell out a Marvel Superhero!',
    },
    {
        type: 'input',
        name: 'guess',
        message: 'Type a letter and press enter, you have 10 guesses!',
    },
    {
        type: 'confirm',
        name: 'ready',
        message: 'Are you ready?!',
    },
    {
        type: 'input',
        name: 'goodLuck',
        message: 'Good luck!!',

    },

]);
function checkInput(results) {
    if ((results.letter.length === 1) && /^[a-zA-Z]+$/.test(results.letter)) {
        // console.log(results.letter.length);
        const checking = results.letter;
        // console.log("Checking this value " + checking);
        const shownWord = chosenWord.letterForWord();
        // console.log(shownWord);
        chosenWord.checkLet(checking);
        // var checkingWord = chosenWord.checkLet(checking);
        // console.log(checkingWord);
        if (shownWord === chosenWord.letterForWord()) {
            console.log(chalk.redBright('Wrong Letter, try again'));
            guessLeft += 1;
            console.log((10 - guessLeft) + chalk.magenta(' Guesses Remaining'));
            promptUser();
        } else {
            correctCheck();
        }
    }
}
function promptUser() {
    if (guessLeft < 10) {
        console.log(chosenWord.letterForWord());
        inquirer.prompt([
            {
                type: 'input',
                name: 'letter',
                message: 'Pick a letter and press enter.',
            },
        ]).then((results) => {
            // console.log(results);
            checkInput(results);
        });
    } else {
        console.log("You're out of guesses! Better luck next time.\n");
        console.log(randomWord);
        randomWord = '';
        chosenWord = '';
        random = 0;
        guessLeft = 0;
        startGame();
    }
}
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
    console.log(chalk.cyan('\n=============================================\n'));
    console.log(chalk.blueBright('Welcome! Guess a letter to find a Marvel Superhero!'));
    console.log(chalk.blueBright('You have 10 Guesses to find the correct Hero!'));
    console.log(chalk.cyan('\n============================================='));

    promptUser();
}

function correctCheck() {
    console.log(chalk.greenBright('Correct Guess! Keep going!!'));
    // console.log("This is the chosen word " + chosenWord.letterForWord());
    // console.log("This is the random word " + randomWord);
    if (randomWord.replace(/ /g, '') === (chosenWord.letterForWord()).replace(/ /g, '')) {
        console.log(chalk.bgMagenta('\nCorrect Word:'));
        console.log(chosenWord.letterForWord());
        console.log(chalk.yellow('\nYou Win!'));
        randomWord = '';
        chosenWord = '';
        random = 0;
        guessLeft = 0;
        // startGame();
    } else {
        promptUser();
    }
}
// beginning();
startGame();
