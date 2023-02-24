function getComputerChoice() {
  // gets random number, either 0 1 2
  let randomInt = Math.floor(Math.random() * 3);

  switch (randomInt) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function getPlayerSelection() {
  return prompt("Choose Rock, Paper or Scissors").toLowerCase();
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerSelection();
