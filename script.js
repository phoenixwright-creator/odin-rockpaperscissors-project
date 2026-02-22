playGame();

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

function getHumanChoice(event) {
    // let choice = prompt("What will you play ? Enter a one of these words : Rock | Paper | Scissors :");

    return event.target.textContent;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let round = 0;
    
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            let humanChoice = e.target.textContent.toLowerCase();
            let computerChoice = getComputerChoice();
            console.log("Human plays : " + humanChoice + " - Computer plays : " + computerChoice);
            playRound(humanChoice, computerChoice);

            if(round === 5) {
                if (humanScore > computerScore) {
                    alert("Human won the game !!!");
                }
                else if (computerScore > humanScore) {
                    alert("Computer won the game !!!");
                }
                else {
                    alert("No one won !!! Wow, we don't see that often, congrats to both of you !!!");
                }
                round = 0;
                humanScore = 0;
                computerScore = 0;
            }
        });
    });

    function playRound(humanChoice, computerChoice) {
        ++round;
        console.log ("Round : " + round);
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
}