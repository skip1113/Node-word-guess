//Requiring exported file/function from letter.js
var Letter = require("./letter.js");
//Constructor representing current word user is trying to guess.
function Word(wordArray) {
    this.wordArray = wordArray;
    this.newLet = [];
    this.hiddenLetter = function() {
        for (var i = 0; i < wordArray.length; i++) {
            var alphaLetter = new Letter(wordArray[i]);
            this.newLet.push(alphaLetter);
        }
    }
    this.letterForWord = function() {
        var hiddenWord = [];
        for (var i = 0; i < this.newLet.length; i++) {
            hiddenWord.push(this.newLet[i].returning());
        }
    }
    this.checkLet = function(inputGuess) {
        for (var i = 0; i < this.newLet.length; i ++) {
            this.newLet[i].checkLet(inputGuess);
        }
    }
}
//Export word.js to other files to require
module.exports = Word;