var _a, _b, _c, _d;
var playerScore = 0;
var compScore = 0;
function computerChoice(number) {
    if (number === 0) {
        return "Rock";
    }
    else if (number === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
function playRound(userchoice, computerChoiceArg) {
    if (userchoice === computerChoiceArg) {
        return "Its a draw!";
    }
    else if ((userchoice === 'Rock' && computerChoiceArg === "Scissors") || (userchoice === "Paper" && computerChoiceArg === "Rock") || (userchoice === "Scissors" && computerChoiceArg === "Paper")) {
        playerScore += 1;
        return "Player wins this round!";
    }
    else {
        compScore += 1;
        return "Computer wins this round!";
    }
}
function updateScore() {
    var scoreDisplay = document.getElementById('scoreDisplay');
    if (scoreDisplay) {
        scoreDisplay.textContent = "Player: ".concat(playerScore, " | Computer: ").concat(compScore);
    }
}
function checkGameOver() {
    return playerScore === 5 || compScore === 5;
}
function displayResult(playerChoice, computerChoiceArg, result) {
    var resultMessage = document.getElementById('resultMessage');
    if (resultMessage) {
        var gameOverMessage = '';
        if (checkGameOver()) {
            gameOverMessage = playerScore === 5 ? '<br><br>🎉 Player wins the game!' : '<br><br>💻 Computer wins the game!';
        }
        resultMessage.innerHTML = "You chose: ".concat(playerChoice, " | Computer chose: ").concat(computerChoiceArg, "<br>").concat(result).concat(gameOverMessage);
    }
}
// Button event listeners
(_a = document.getElementById('rockBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    if (!checkGameOver()) {
        var computerChoiceArg = computerChoice(Math.floor(Math.random() * 3));
        var result = playRound('Rock', computerChoiceArg);
        displayResult('Rock', computerChoiceArg, result);
        updateScore();
    }
});
(_b = document.getElementById('paperBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    if (!checkGameOver()) {
        var computerChoiceArg = computerChoice(Math.floor(Math.random() * 3));
        var result = playRound('Paper', computerChoiceArg);
        displayResult('Paper', computerChoiceArg, result);
        updateScore();
    }
});
(_c = document.getElementById('scissorsBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    if (!checkGameOver()) {
        var computerChoiceArg = computerChoice(Math.floor(Math.random() * 3));
        var result = playRound('Scissors', computerChoiceArg);
        displayResult('Scissors', computerChoiceArg, result);
        updateScore();
    }
});
(_d = document.getElementById('resetBtn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    playerScore = 0;
    compScore = 0;
    var resultMessage = document.getElementById('resultMessage');
    if (resultMessage) {
        resultMessage.textContent = '';
    }
    updateScore();
});
