const POSSIBILITIES = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll(".choices");
const display = document.querySelector(".display-message");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const playerResult = document.getElementById("player-choice");
const computerResult = document.getElementById("computer-choice");
playerScore.textContent = 0;
computerScore.textContent = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => whoWon(e));
});

const whoWon = (e) => {
  let playerChoice = e.target.id;
  let computerChoice = POSSIBILITIES[Math.floor(Math.random() * 3)];
  let winCondition = playerScore == 5 || computerScore == 5;
  if (playerChoice === computerChoice) {
    display.textContent = "It's a tie!";
    displayResults(playerChoice, computerChoice);
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore.textContent++;
    display.textContent = "You win!";
    displayResults(playerChoice, computerChoice);
    if (playerScore.textContent == 5) endGame();
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore.textContent++;
    display.textContent = "You win!";
    displayResults(playerChoice, computerChoice);
    if (playerScore.textContent == 5) endGame();
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore.textContent++;
    display.textContent = "You win!";
    displayResults(playerChoice, computerChoice);
    if (playerScore.textContent == 5) endGame();
  } else {
    computerScore.textContent++;
    display.textContent = "You lose!";
    displayResults(playerChoice, computerChoice);
    if (computerScore.textContent == 5) endGame();
  }
};

const endGame = () => {
  if (playerScore.textContent == 5)
    display.textContent = "You've won the game!";
  if (computerScore.textContent == 5)
    display.textContent = "The Computer has won the game!";
  playerScore.textContent = 0;
  computerScore.textContent = 0;
};

const displayResults = (playerChoice, computerChoice) => {
  playerResult.src = `/rock-paper-scissors/images/${playerChoice}.svg`;
  computerResult.src = `/rock-paper-scissors/images/${computerChoice}.svg`;
};
