type Choice = "Rock" | "Paper" | "Scissors";
let playerScore = 0;
let compScore = 0;
function computerChoice(number: number):Choice { 
    if (number === 0) { 
        return "Rock";
    }
    else if (number === 1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
function playRound(userchoice: Choice, computerChoice: Choice): void {
    if (userchoice === computerChoice) { 
        console.log("Its a draw");
    }
    else if ((userchoice === 'Rock' && computerChoice === "Scissors") || (userchoice === "Paper" && computerChoice === "Rock") || (userchoice === "Scissors" && computerChoice === "Paper")){
        playerScore += 1;
        console.log("Player wins!");
    }
    else {
        console.log("Computer wins, sad!");    
    }}

let Round = 1;
while (playerScore < 5 || compScore < 5) { 
    let playerInput = prompt("Enter Rock, Paper, or Scissors");
    if (playerInput === "Rock" || playerInput === "Paper" || playerInput === "Scissors") {
        let computerInput = computerChoice(Math.floor(Math.random() * 3));
        playRound(playerInput,computerInput);
        console.log(`Round: ${Round} Finished`)
        Round += 1;
        console.log(`Current Score: Player ${playerScore} Comp: ${compScore}`);
    }
    else { 
        console.log('Please provide a choice that is either Rock, Paper, or Scissors');
    }
}