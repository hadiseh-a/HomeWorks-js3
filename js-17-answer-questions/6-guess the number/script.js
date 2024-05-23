let randomNumber = Math.floor(Math.random() * 100 + 1);
let tries = 7;
let triesTaken = 0;
let triesOutput = document.querySelector(".Tries-output");
triesOutput.innerHTML = `Number of Tries: ${tries}`;
let gaming=true;
function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  let finalOutPut = document.querySelector(".final-output");

  if(gaming){
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
    if (guess == 0 || guess < 0 || guess > 100)
    finalOutPut.innerHTML = "Please enter a number between 1 and 100";
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if (guess > randomNumber) {
    finalOutPut.innerHTML = "Number is too high, try again";
    tries--;
    triesTaken++;
    triesOutput.innerHTML = `Number of Tries: ${tries}`;
  }
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  else if (guess < randomNumber) {
    finalOutPut.textContent = "Number is too low, try again";
    tries--;
    triesTaken++;
    triesOutput.innerHTML = `Number of Tries: ${tries}`;
  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else if (guess == randomNumber) {
    finalOutPut.innerHTML = "Guess is correct. You win!";
    triesOutput.innerHTML = `It took you ${triesTaken} tries`;
    gaming=false;
  }
  if (tries === 0 && guess !== randomNumber) {
    triesOutput.innerHTML = "You Lose, the number was " + randomNumber;
    finalOutPut.innerHTML = "";
    gaming=false
  }}
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  document.querySelector(".inputs-Values").value = "";
  gaming=true;
  //Reset tries, and triesTaken by the user
  tries = 7;
  triesTaken = 0;
  document.querySelector(".final-output").innerHTML =
    "Guess a number between 1 and 100";
  document.querySelector(
    ".Tries-output"
  ).innerHTML = `Number of Tries: ${tries}`;
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
