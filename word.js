// Requiring exported file/function from letter.js
const Letter = require('./letter.js');
// Constructor representing current word user is trying to guess.
function Word(wordArray) {
    this.wordArray = wordArray;
    this.newLet = [];
    this.hiddenLetter = () => {
        for (let i = 0; i < wordArray.length; i += 1) {
            const alphaLetter = new Letter(wordArray[i]);
            this.newLet.push(alphaLetter);
        }
    };
    this.letterForWord = () => {
        const hiddenWord = [];
        for (let i = 0; i < this.newLet.length; i += 1) {
            hiddenWord.push(this.newLet[i].returning());
        }
        return hiddenWord.join(' ');
    };
    this.checkLet = (results) => {
        // console.log("value passed is " + results);
        // console.log("THIs this " + this.newLet[0].guessed);
        for (let i = 0; i < this.newLet.length; i += 1) {
            this.newLet[i].check(results);
            // console.log("THIs this " + this.newLet[i].guessed);
        }
    };
}

// Export word.js to other files to require
module.exports = Word;
