// Holder of choices for the computer to pick from randomly
const CHOICES = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Create Function that gets random computer shoice by random numbers 0 to 2
// Random number then picks out a choice from an array
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * CHOICES.length);
    return randomNumber;
}

function getComputerChoice(){
    let randomNumber = getRandomNumber();
    return CHOICES[randomNumber];
}

// Get playerChoice functions to get players choice and call in playRound function
function promptPlayer(){
    let data = prompt("Rock Paper Scissors! Pick Rock, Paper, or Scissors to play:");
    return data;
}
// Recursion if invalid value is presented will run until given a correct value
function getPlayerChoice() {
    let inputValue = promptPlayer();
    let playerChoice = inputValue.toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        return playerChoice;
    } else {
        alert("Invalid Value, Try Again.")
        return getPlayerChoice();
    }
}

// Player and Computer Score Counter functions to add after playRound
function playerScoreIncrease() {
    playerScore += 1;
}

function computerScoreIncrease() {
    computerScore += 1;
}

// playRound function which evaluates the player's choice versus the computer random choice
function playRound(playerSelection, computerSelection){
    // Need to take in the players choice and make it all lowercase, same with the computers
    // Check the values against each other
    // Rock beats Scissors and loses to paper
    // Scissors beats paper but loses to rock
    // Paper beats rock but loses to Scissors
    // return the string declaring the winner with a statement saying etc beats etc
    let player = playerSelection;
    let computer = computerSelection;
    if (player === "rock") {
        if (computer === "rock") {
            return "A Draw! Rock ties Rock.";
        } else if (computer === "scissors") {
            playerScoreIncrease();
            return "Player Wins! Rock beats Scissors.";
        } else {
            computerScoreIncrease();
            return "Computer Wins! Paper beats Rock.";
        }
    } else if (player === "scissors") {
        if (computer === "scissors") {
            return "A Draw! Scissors ties Scissors.";
        } else if (computer === "paper") {
            playerScoreIncrease();
            return "Player Wins! Scissors beats Paper";
        } else {
            computerScoreIncrease();
            return "Computer Wins! Rock beats Scissors.";
        }
    } else if (player === "paper"){
        if (computer === "paper") {
            return "A Draw! Paper ties Paper.";
        } else if (computer === "rock") {
            playerScoreIncrease();
            return "Player Wins! Paper beats Rock"; 
        } else {
            computerScoreIncrease();
            return "Computer Wins! Scissors beats Paper."
        }
    } else {
        // Added for invalid input from user
        return "Invalid input added from player."
    }

}

// Create a function called game that plays playRound 5 times
// Created increasing score functions above, this function deals with the player and computer score values
function game(){
    playerScore = 0;
    computerScore = 0;
    var gameOn = true;
    while (gameOn) {
        alert(playRound(getPlayerChoice(), getComputerChoice()));
        alert(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
        if (playerScore === 5 || computerScore === 5) {
            gameOn = false;
        }
    }
    if (playerScore > computerScore) {
        return alert(`Player Wins! ${playerScore} - ${computerScore}`);
    } else if (playerScore < computerScore) {
        return alert(`Computer Wins! ${computerScore} - ${playerScore}`);
    } else { 
        return alert(`Draw! ${playerScore} - ${computerScore}`);
    }
}

// GUI 
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

buttonRock.addEventListener("click", function() {
    console.log(playRound("rock", getComputerChoice()));
})

buttonPaper.addEventListener("click", function() {
    console.log(playRound("paper", getComputerChoice()));
})

buttonScissors.addEventListener("click", function() {
    console.log(playRound("scissors", getComputerChoice()));
})