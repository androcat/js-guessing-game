(function () {
  "use strict";

  // Creates and returns rand number
  function randNum() {
    return Math.floor(Math.random() * 11); // instead of +1 to include 0 AKA [0, 10]
  }

  // checks guess
  function checkGuess(guess) {
    if (guess === randomNum) {
      return true;
    }
    return false;
  }

  // define a function (closure) to keep track of num guesses
  function incrementGuesses() {
    let numGuesses = 0;
    return function () {
      //this is a js closure !!
      return ++numGuesses; // varName++ adds the increment after returning that value
      // ++varName adds first then returns the value
    };
  }

  // deifne a function to handle the user's guess
  function handleGuess() {
    const userGuess = parseInt(prompt("Guess a number between 1 and 10:")); // prompt input comes in as a string
    const numOfGuesses = countGuesses();

    if (checkGuess(userGuess)) {
      alert(
        `Yay! You guessed the number in ${numOfGuesses} tires. The number is ${randomNum}`
      );
    } else {
      alert(`Nope! Try again!`);
      handleGuess(); // recurrsion !!!! :^D
    }
  }

  // generate a rand num and execute function to track number of functions
  const randomNum = randNum();
  const countGuesses = incrementGuesses();

  // Add an devent listner ot the guess button
  document.querySelector("button").addEventListener("click", handleGuess);
})();
