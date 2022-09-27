// Holder of choices for the computer to pick from randomly
const CHOICES = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Create Function that gets random computer choice by random numbers 0 to 2
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * CHOICES.length);
    return randomNumber;
}

function getComputerChoice(){
    let randomNumber = getRandomNumber();
    return CHOICES[randomNumber];
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

// GUI 
const buttonDiv = document.querySelector(".buttons");
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const displayDiv = document.querySelector(".display");
const scoreBoard = document.querySelector(".scoreboard");
const startButton = document.querySelector("#start");
const playAgainButton = document.querySelector('#play-again');

function displayContent(content) {
    displayDiv.textContent = "";
    displayDiv.textContent = content;
}

function updateScoreboard() {
    scoreBoard.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
}

function matchProtocol(data) {
    displayContent(data);
    updateScoreboard();
}

function playAgain() {
    playAgainButton.classList.toggle("hidden");
}

playAgainButton.addEventListener("click", function() {
    playerScore = 0;
    computerScore = 0;
    displayContent("Lets Play Rock paper Scissors");
    updateScoreboard();
    playAgainButton.classList.toggle("hidden");
})

function gameOver() {
    if (playerScore === 5) {
        displayContent("Game over! Player Wins");
        playAgain();

    } else if (computerScore === 5) {
        displayContent("Game over! Computer Wins!")
        playAgain();
    }

}

displayContent("Lets Play Rock Paper Scissors")
updateScoreboard();
buttonRock.addEventListener("click", function() {
    if (playerScore === 5 || computerScore === 5) {
        displayContent("");
        gameOver();
    } else {
        var data = playRound("rock", getComputerChoice());
        matchProtocol(data);
    }
})

buttonPaper.addEventListener("click", function(){
    if (playerScore === 5 || computerScore === 5) {
        displayContent("");
        gameOver();
    } else {
        var data = playRound("paper", getComputerChoice());
        matchProtocol(data);
    }
})

buttonScissors.addEventListener('click', function(){
    if (playerScore === 5 || computerScore === 5) {
        displayContent("");
        gameOver();
    } else {
        var data = playRound("scissors", getComputerChoice());
        matchProtocol(data);
    }
})






