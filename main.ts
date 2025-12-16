type Choice = "Rock" | "Paper" | "Scissors";
let playerScore = 0;
let compScore = 0;

function computerChoice(number: number): Choice { 
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

function playRound(userchoice: Choice, computerChoiceArg: Choice): string {
    if (userchoice === computerChoiceArg) { 
        return "Its a draw!";
    }
    else if ((userchoice === 'Rock' && computerChoiceArg === "Scissors") || (userchoice === "Paper" && computerChoiceArg === "Rock") || (userchoice === "Scissors" && computerChoiceArg === "Paper")){
        playerScore += 1;
        return "Player wins this round!";
    }
    else {
        compScore += 1;
        return "Computer wins this round!";    
    }
}

function updateScore() {
    const scoreDisplay = document.getElementById('scoreDisplay');
    if (scoreDisplay) {
        scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${compScore}`;
    }
}

function checkGameOver(): boolean {
    return playerScore === 5 || compScore === 5;
}

function displayResult(playerChoice: Choice, computerChoiceArg: Choice, result: string) {
    const resultMessage = document.getElementById('resultMessage');
    if (resultMessage) {
        let gameOverMessage = '';
        if (checkGameOver()) {
            gameOverMessage = playerScore === 5 ? '<br><br>🎉 Player wins the game!' : '<br><br>💻 Computer wins the game!';
        }
        resultMessage.innerHTML = `You chose: ${playerChoice} | Computer chose: ${computerChoiceArg}<br>${result}${gameOverMessage}`;
    }
}

// Button event listeners
document.getElementById('rockBtn')?.addEventListener('click', () => {
    if (!checkGameOver()) {
        const computerChoiceArg = computerChoice(Math.floor(Math.random() * 3));
        const result = playRound('Rock', computerChoiceArg);
        displayResult('Rock', computerChoiceArg, result);
        updateScore();
    }
});

document.getElementById('paperBtn')?.addEventListener('click', () => {
    if (!checkGameOver()) {
        const computerChoiceArg = computerChoice(Math.floor(Math.random() * 3));
        const result = playRound('Paper', computerChoiceArg);
        displayResult('Paper', computerChoiceArg, result);
        updateScore();
    }
});

document.getElementById('scissorsBtn')?.addEventListener('click', () => {
    if (!checkGameOver()) {
        const computerChoiceArg = computerChoice(Math.floor(Math.random() * 3));
        const result = playRound('Scissors', computerChoiceArg);
        displayResult('Scissors', computerChoiceArg, result);
        updateScore();
    }
});

document.getElementById('resetBtn')?.addEventListener('click', () => {
    playerScore = 0;
    compScore = 0;
    const resultMessage = document.getElementById('resultMessage');
    if (resultMessage) {
        resultMessage.textContent = '';
    }
    updateScore();
});