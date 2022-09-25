const CHOICES = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    return CHOICES[randomNumber];
}