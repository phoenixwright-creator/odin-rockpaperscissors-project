function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch(choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function getHumanChoice() {
    let choice = parseInt(prompt("What will you play ? Enter a number : 1 - Rock | 2 - Paper | 3 - Scissors"));

    switch(choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        ++computerScore;
        console.log("Computer wins !");
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        ++humanScore;
        console.log("Human wins !");
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        ++humanScore;
        console.log("Human wins !");
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        ++computerScore;
        console.log("Computer wins !");
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        ++computerScore;
        console.log("Computer wins !");
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        ++humanScore;
        console.log("Human wins !");
    }
    else {
        console.log("It's a tie !");
    }
}

function playGame() {

    //First round
    let humanChoice = getHumanChoice();
    console.log("Human plays : " + humanChoice);
    let computerChoice = getComputerChoice();
    console.log("Computer plays : " + computerChoice);
    playRound(humanChoice, computerChoice);
    console.log("Score = " + humanScore + " - " + computerScore);

    //Second round
    humanChoice = getHumanChoice();
    console.log("Human plays : " + humanChoice);
    computerChoice = getComputerChoice();
    console.log("Computer plays : " + computerChoice);
    playRound(humanChoice, computerChoice);
    console.log("Score = " + humanScore + " - " + computerScore);

    //Third round
    humanChoice = getHumanChoice();
    console.log("Human plays : " + humanChoice);
    computerChoice = getComputerChoice();
    console.log("Computer plays : " + computerChoice);
    playRound(humanChoice, computerChoice);
    console.log("Score = " + humanScore + " - " + computerScore);

    //Fourth round
    humanChoice = getHumanChoice();
    console.log("Human plays : " + humanChoice);
    computerChoice = getComputerChoice();
    console.log("Computer plays : " + computerChoice);
    playRound(humanChoice, computerChoice);
    console.log("Score = " + humanScore + " - " + computerScore);

    //Fifth round
    humanChoice = getHumanChoice();
    console.log("Human plays : " + humanChoice);
    computerChoice = getComputerChoice();
    console.log("Computer plays : " + computerChoice);
    playRound(humanChoice, computerChoice);
    console.log("Score = " + humanScore + " - " + computerScore);

    if (humanScore > computerScore) {
        console.log("Human won the game !!!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer won the game !!!");
    }
    else {
        console.log("No one won !!! Wow, we don't see that often, congrats to both of you !!!");
    }
}

let humanScore = 0;
let computerScore = 0;
console.log("Score = " + humanScore + " - " + computerScore);

playGame();






