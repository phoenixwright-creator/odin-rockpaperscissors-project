function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch(choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("What will you play ? Enter a one of these words : Rock | Paper | Scissors :");

    return choice.toLowerCase();
}

function playGame() {

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            ++computerScore;
            console.log("Computer wins ! Score = Human : " + humanScore + " - Computer : " + computerScore);
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            ++humanScore;
            console.log("Human wins ! Score is = : " + humanScore + " - Computer : " + computerScore);
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            ++humanScore;
            console.log("Human wins ! Score is = : " + humanScore + " - Computer : " + computerScore);
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            ++computerScore;
            console.log("Computer wins ! Score = Human : " + humanScore + " - Computer : " + computerScore);
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            ++computerScore;
            console.log("Computer wins ! Score = Human : " + humanScore + " - Computer : " + computerScore);
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            ++humanScore;
            console.log("Human wins ! Score = Human : " + humanScore + " - Computer : " + computerScore);
        }
        else {
            console.log("It's a tie ! Score = Human : " + humanScore + " - Computer : " + computerScore);
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    //First round
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log("Human plays : " + humanChoice + " - Computer plays : " + computerChoice);
    playRound(humanChoice, computerChoice);

    //Second round
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log("Human plays : " + humanChoice + " - Computer plays : " + computerChoice);
    playRound(humanChoice, computerChoice);

    //Third round
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log("Human plays : " + humanChoice + " - Computer plays : " + computerChoice);
    playRound(humanChoice, computerChoice);

    //Fourth round
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log("Human plays : " + humanChoice + " - Computer plays : " + computerChoice);
    playRound(humanChoice, computerChoice);

    //Fifth round
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log("Human plays : " + humanChoice + " - Computer plays : " + computerChoice);
    playRound(humanChoice, computerChoice);

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

playGame();
