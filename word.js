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
module.exports = Letter;