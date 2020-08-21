# Node-word-guess

# Link to deployed app: https://github.com/skip1113/Node-word-guess

## Overview
This Node application is operated in the users Git Terminal. The user will be prompted powered by Inquirer, and Chalk. Follow the prompts to play, the user must guess the correct Marvel Superhero letter by letter. I wanted to be able to implement Inquirer to prompt and also update the hidden word when a letter was guessed, a win or loss, show the answer when there is a win. This game has many functions, for example randomly choosing a hidden word, hiding the letters in the string as underlines, and updating after validating the input the user enters.

### Command lines:
* node index.js
### Instructions:
* Clone this respository and open this file in your terminal.
* Type npm install to install the dependencies that are used from file: package.json
* After the packages install you're ready to start.
* Now type the command line "node index.js" to start.

![](/assets/images/word-start.png)

* Now Guess a letter, press enter, and try to guess the superhero

![](/assets/images/word-mid.png)

* If you guess a letter incorrectly

![](/assets/images/word-wrong.png)

* Finishing the game if you win, or you run out of guesses
* After the game it will show you the hidden word and restart the game to play again

![](/assets/images/word-fin.png)


![](/assets/images/word-lose.png)

## Organization:
* This app started with installing node packages
    * npm init for package.json file to hold your package dependencies
    * Installing inquirer to prompt the user
    * Chalk to style the log so it's not boring!
## Technologies used:
* Javascript
* Nodejs
    * Module Exports
    * Require
* Node Packages:
    * Inquirer 
    * Chalk
