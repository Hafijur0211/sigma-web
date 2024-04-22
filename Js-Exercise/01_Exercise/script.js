// Guess the number
// let number = 0 // Generate random number here
// let chances = 0
// Keep asking for the number until the correct number is guessed
// Increment the chance variable

// Eventually after the game is over, display the (100 - Number of chances) and the actual number

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let numberOfGuesses = 0;

while (true) {
    guess = parseInt(prompt("Guess the number (between 1 and 100):"));
    numberOfGuesses++;

    if (guess === randomNumber) {
        console.log(`Congratulations! You guessed the number in ${numberOfGuesses} guesses.`);
        break;
    } else if (guess < randomNumber) {
        console.log("The number is greater than your guess. Try again.");
    } else {
        console.log("The number is lesser than your guess. Try again.");
    }
}
