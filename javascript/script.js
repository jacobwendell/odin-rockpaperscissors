const buttonDiv = document.querySelector(".buttons");
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const displayDiv = document.querySelector(".display");
const scoreBoard = document.querySelector(".scoreboard");
const startButton = document.querySelector("#start");
const playAgainButton = document.querySelector('#play-again');
const computerRock = document.querySelector("#computer-rock");
const computerPaper = document.querySelector("#computer-paper");
const computerScissors = document.querySelector("#computer-scissors");
const playerScoreBoard = document.querySelector(".playerscoreboard");
const computerScoreBoard = document.querySelector(".computerscoreboard");

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

function removeHighlightBackground() {
    computerRock.classList.remove("highlight-background1");
    computerPaper.classList.remove("highlight-background1");
    computerScissors.classList.remove("highlight-background1");
}

function removePlayerBackground() {
    buttonScissors.classList.remove("highlight-background1");
    buttonRock.classList.remove("highlight-background1");
    buttonPaper.classList.remove("highlight-background1");
}

function highlightComputerBackground(computerButton) {
    removeHighlightBackground();
    computerButton.classList.add("highlight-background1");
}

function highlightPlayerBackground(playerButton) {
    removePlayerBackground();
    playerButton.classList.add("highlight-background1");
}



// playRound function which evaluates the player's choice versus the computer random choice
function playRound(playerSelection, computerSelection){
    let player = playerSelection;
    let computer = computerSelection;
    if (player === "rock") {
        highlightPlayerBackground(buttonRock);
        if (computer === "rock") {
            highlightComputerBackground(computerRock);
            return "A Draw! Rock ties Rock.";
        } else if (computer === "scissors") {
            highlightComputerBackground(computerScissors);
            playerScoreIncrease();
            return "Player Wins! Rock beats Scissors.";
        } else {
            highlightComputerBackground(computerPaper);
            computerScoreIncrease();
            return "Computer Wins! Paper beats Rock.";
        }
    } else if (player === "scissors") {
        highlightPlayerBackground(buttonScissors);
        if (computer === "scissors") {
            highlightComputerBackground(computerScissors);
            return "A Draw! Scissors ties Scissors.";
        } else if (computer === "paper") {
            highlightComputerBackground(computerPaper);
            playerScoreIncrease();
            return "Player Wins! Scissors beats Paper";
        } else {
            highlightComputerBackground(computerRock);
            computerScoreIncrease();
            return "Computer Wins! Rock beats Scissors.";
        }
    } else if (player === "paper"){
        highlightPlayerBackground(buttonPaper);
        if (computer === "paper") {
            highlightComputerBackground(computerPaper);
            return "A Draw! Paper ties Paper.";
        } else if (computer === "rock") {
            highlightComputerBackground(computerRock);
            playerScoreIncrease();
            return "Player Wins! Paper beats Rock"; 
        } else {
            highlightComputerBackground(computerScissors);
            computerScoreIncrease();
            return "Computer Wins! Scissors beats Paper."
        }
    } else {
        // Added for invalid input from user
        return "Invalid input added from player."
    }

}

// GUI 
function displayContent(content) {
    displayDiv.textContent = "";
    displayDiv.textContent = content;
}

function updateScoreboard() {
    playerScoreBoard.textContent = `Player Score: ${playerScore}`;
    computerScoreBoard.textContent = `Computer Score: ${computerScore}`;
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
    removeHighlightBackground();
    removePlayerBackground();
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
        if (playerScore === 5 || computerScore === 5) {
            displayContent("");
            gameOver();
        } 
    }
})

buttonPaper.addEventListener("click", function(){
    if (playerScore === 5 || computerScore === 5) {
        displayContent("");
        gameOver();
    } else {
        var data = playRound("paper", getComputerChoice());
        matchProtocol(data);
        if (playerScore === 5 || computerScore === 5) {
            displayContent("");
            gameOver();
        } 
    }
})

buttonScissors.addEventListener('click', function(){
    if (playerScore === 5 || computerScore === 5) {
        displayContent("");
        gameOver();
    } else {
        var data = playRound("scissors", getComputerChoice());
        matchProtocol(data);
        if (playerScore === 5 || computerScore === 5) {
            displayContent("");
            gameOver();
        } 
    }
})

