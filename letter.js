// Constructor for letters and guesses to replace a underlying character
function Letter(letters) {
    this.letters = letters;
    this.guessed = false;
    this.returning = () => {
        if (this.letters === ' ') {
            return ' ';
        }
        if (!this.guessed) {
            return '_';
        }

        return this.letters;
    };
    this.check = (results) => {
        // console.log("This.letter is " + results);
        // console.log("This is the .letter " + this.letters);
        // this.guessed = true;
        if (results.toLowerCase() === this.letters.toLowerCase()) {
            this.guessed = true;
            // console.log("correctly Guessed");
        }
    };
}
// Export this function for other files.
module.exports = Letter;
