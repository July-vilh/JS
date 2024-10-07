/*
The program implements a simple game where the user tries to guess a random number 
generated by the computer in one attempt. The program also saves and displays the history of attempts.

Steps to follow:
1. Function guessNumber(userGuess):
   The function takes the number entered by the user as an argument `userGuess`.
   
2. Random number generation:
   The program generates a random number in the range from 1 to 100 using the `Math.random()` function. This number is stored in the variable `secretNumber`.
   The generated number is printed to the console for debugging purposes (it can be hidden in the real game).

3. Array to store attempts:
   The user's input is stored in the `attempts` array, which keeps a history of all the user's guesses.

4. Checking the user's guess:
   - If the user guesses the secret number, the message "Congratulations! You guessed the number!" is displayed.
   - If the guessed number is lower than the secret number, the message "The secret number is higher." is shown.
   - If the guessed number is higher than the secret number, the message "The secret number is lower." is shown.

5. Displaying the history of attempts:
   After checking the input, the program displays the history of all attempts the user made during the game.

Example of usage:
   The user calls the function `guessNumber(50)`, where 50 is the number the user tries to guess.
   The program generates a random number (for example, 73) and checks the user's input.
   If the user does not guess correctly, the program informs whether the secret number is higher or lower, and displays the history of attempts.
*/

let attempts = [];

function guessNumber(userGuess) {
    let secretNumber = Math.floor(Math.random() * 100);
    attempts.push(userGuess);
    console.log("The number that the program has generated (random):", secretNumber);
    if (secretNumber === userGuess) {
        console.log("Congratulations! You guessed the number!");
    } else if (userGuess < secretNumber) {
        console.log("The secret number is higher.");
    } else {
        console.log("The secret number is lower.");
    }
    console.log("All attempts:", attempts);
}

guessNumber(50);

// Result:
// The number that the program has generated (random): 66
// The secret number is higher.
// All attempts: [ 50 ]