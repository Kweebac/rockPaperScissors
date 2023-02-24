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

function getPlayerSelection() {
  return prompt("Choose Rock, Paper or Scissors").toLowerCase();
}

function round(player, computer) {
  switch (player) {
    case "rock":
      switch (computer) {
        case "rock":
          console.log("It's a tie! Rock === Rock\nPlayer: Rock\nComputer: Rock");
          break;
        case "paper":
          console.log("You lose! Rock < Paper\nPlayer: Rock\nComputer: Paper");
          break;
        case "scissors":
          console.log("You win! Rock > scissors\nPlayer: Rock\nComputer: Scissors");
          break;
      }
      break;
    case "paper":
      switch (computer) {
        case "rock":
          console.log("You win! Paper > Rock\nPlayer: Paper\nComputer: Rock");
          break;
        case "paper":
          console.log("It's a tie! Paper === Paper\nPlayer: Paper\nComputer: Paper");
          break;
        case "scissors":
          console.log("You lose! Paper < Scissors\nPlayer: Paper\nComputer: Scissors");
          break;
      }
      break;
    case "scissors":
      switch (computer) {
        case "rock":
          console.log("You lose! Scissors < Rock\nPlayer: Scissors\nComputer: Rock");
          break;
        case "paper":
          console.log("You win! Scissors > Paper\nPlayer: Scissors\nnComputer: Paper");
          break;
        case "scissors":
          console.log("It's a tie! Scissors === Scissors\nPlayer: Scissors\nnComputer: Scissors");
          break;
      }
      break;
    default:
      console.log("Invalid option");
  }
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerSelection();

round(playerSelection, computerSelection);
