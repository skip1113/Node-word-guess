//Constructor for letters and guesses to replace a underlying character
function Letter(letters) {
    this.letters = letters;
    this.guessed = false;
    this.returning = function() {
        if(this.letters === " ") {
            return " ";
        }
        else if(!this.guessed) {
            return "_";
        }
        else {
            return this.letters;
        }
    }
    this.check = function(input) {
        if(input === this.letter) {
            this.guessed = true;
        }
    }
}
//Export this function for other files.
module.exports = Letter;