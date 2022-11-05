function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3)
    if (randomInt === 0) {
        return "rock"
    } else if (randomInt === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}


function playRound(playerSelection) {
    if (playerSelection.toLowerCase() !== "paper" 
        && playerSelection.toLowerCase() !== "scissors" 
        && playerSelection.toLowerCase() !== "rock") {
        return "Invalid input"
    }
    let computerSelection = getComputerChoice();
    console.log("Computer choice: " + computerSelection);
    if (playerSelection.toLowerCase() === computerSelection) {
        return "tie"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper"
            || playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"
            || playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "you lost"
    } else {
        return "you won"
    }
}

function game() {
    for (let i=0; i < 5; i++) {
        let playerInput = prompt("Input: ").toLowerCase();
        console.log("You choice: " + playerInput);
        
        return playRound(playerInput);
    }
}

// console.log(playRound("Scissors"))
game()
