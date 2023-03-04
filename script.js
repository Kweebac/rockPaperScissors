function getComputerChoice() {
  // gets random number, either 0 1 2
  let randomInt = Math.floor(Math.random() * 3);

  switch (randomInt) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(player, computer) {
  switch (player) {
    case "rock":
      switch (computer) {
        case "rock":
          return "It's a tie! Rock is equal to Rock";
        case "paper":
          return "You lose! Rock loses against Paper";
        case "scissors":
          return "You win! Rock beats Scissors";
      }
      break;
    case "paper":
      switch (computer) {
        case "rock":
          return "You win! Paper beats Rock";
        case "paper":
          return "It's a tie! Paper is equal to Paper";
        case "scissors":
          return "You lose! Paper loses against Scissors";
      }
      break;
    case "scissors":
      switch (computer) {
        case "rock":
          return "You lose! Scissors loses against Rock";
        case "paper":
          return "You win! Scissors beats Paper";
        case "scissors":
          return "It's a tie! Scissors is equal to Scissors";
      }
      break;
    default:
      alert("Invalid option");
  }
}

function ifWinsOrLosses5() {
  if (wins === 5) {
    winnerDiv.textContent = "You won!";
    resetGame();
  } else if (losses === 5) {
    winnerDiv.textContent = "The computer won!";
    resetGame();
  }
}

function resetGame() {
  wins = 0;
  losses = 0;
  playerScoreDiv.textContent = `Player score: ${wins}`;
  computerScoreDiv.textContent = `Computer score: ${losses}`;
}

function ifWinOrLose(result) {
  if (result.includes("win")) {
    ++wins;
    playerScoreDiv.textContent = `Player score: ${wins}`;
    ifWinsOrLosses5();
  } else if (result.includes("lose")) {
    ++losses;
    computerScoreDiv.textContent = `Computer score: ${losses}`;
    ifWinsOrLosses5();
  }
}

function rock() {
  let result = playRound("rock", getComputerChoice());
  resultDiv.textContent = result;
  ifWinOrLose(result);
}
function paper() {
  let result = playRound("paper", getComputerChoice());
  resultDiv.textContent = result;
  ifWinOrLose(result);
}

function scissors() {
  let result = playRound("scissors", getComputerChoice());
  resultDiv.textContent = result;
  ifWinOrLose(result);
}

rockButton = document.querySelector("button.rock");
paperButton = document.querySelector("button.paper");
scissorsButton = document.querySelector("button.scissors");

const resultDiv = document.querySelector("div.result");
const playerScoreDiv = document.querySelector("div.playerScore");
const computerScoreDiv = document.querySelector("div.computerScore");
const winnerDiv = document.querySelector("div.winner");

let wins = 0;
let losses = 0;
let keepGoing = true;

rockButton.addEventListener("click", rock);
paperButton.addEventListener("click", paper);
scissorsButton.addEventListener("click", scissors);
