// Holder of choices for the computer to pick from randomly
const CHOICES = ["Rock", "Paper", "Scissors"];

// Create Function that gets random computer shoice by random numbers 0 to 2
// Random number then picks out a choice from an array
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    return CHOICES[randomNumber];
}

// playRound function which evaluates the player's choice versus the computer random choice
function playRound(playerSelection, computerSelection){
    // Need to take in the players choice and make it all lowercase, same with the computers
    // Check the values against each other
    // Rock beats Scissors and loses to paper
    // Scissors beats paper but loses to rock
    // Paper beats rock but loses to Scissors
    // return the string declaring the winner with a statement saying etc beats etc
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player === "rock") {
        if (computer === "rock") {
            return "A Draw! Rock ties Rock.";
        } else if (computer === "scissors") {
            return "Player Wins! Rock beats Scissors.";
        } else {
            return "Computer Wins! Paper beats Rock.";
        }
    } else if (player === "scissors") {
        if (computer === "scissors") {
            return "A Draw! Scissors ties Scissors.";
        } else if (computer === "paper") {
            return "Player Wins! Scissors beats Paper";
        } else {
            return "Computer Wins! Rock beats Scissors.";
        }
    } else if (player === "paper"){
        if (computer === "paper") {
            return "A Draw! Paper ties Paper.";
        } else if (computer === "rock") {
            return "Player Wins! Paper beats Rock"; 
        } else {
            return "Computer Wins! Scissors beats Paper."
        }
    } else {
        // Added for invalid input from user
        return "Invalid input added from player."
    }

}