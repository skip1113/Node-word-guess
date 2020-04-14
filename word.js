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
        return hiddenWord.join(" ");
    }
    this.checkLet = function(results) {
        // console.log("value passed is " + results);
        
        // console.log("THIs this " + this.newLet[0].guessed);
        for (var i = 0; i < this.newLet.length; i++) {
            this.newLet[i].check(results);
            // console.log("THIs this " + this.newLet[i].guessed);
        }
    }
}

//Export word.js to other files to require
module.exports = Word;