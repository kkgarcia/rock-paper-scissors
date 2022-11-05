const buttons = document.querySelectorAll('.btn')
const score = document.createElement('div')
const body = document.querySelector('body')

let playerScore = 0
let computerScore = 0


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

buttons.forEach((b) => {
    b.addEventListener('click', (e) => {
        result = playRound(e.target.innerText);
        console.log(result)
        if (result === "you won") {
            playerScore += 1;
            score.innerText = `${playerScore} : ${computerScore}`
            body.append(score)
        } else if (result === "you lost") {
            computerScore += 1;
            score.innerText = `${playerScore} : ${computerScore}`
            body.append(score)
        } else if (result === "tie") {
            score.innerText = "TIE";
            body.appendChild(score)
        }
        if (playerScore === 5) {
            score.innerText = "You won";
            body.append(score);
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            score.innerText = "You lost";
            playerScore = 0;
            computerScore = 0;
        }
    });
})