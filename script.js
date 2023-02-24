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

function playRound(player, computer) {
  switch (player) {
    case "rock":
      switch (computer) {
        case "rock":
          return "It's a tie! Rock === Rock\nPlayer: Rock\nComputer: Rock";
        case "paper":
          return "You lose! Rock < Paper\nPlayer: Rock\nComputer: Paper";
        case "scissors":
          return "You win! Rock > scissors\nPlayer: Rock\nComputer: Scissors";
      }
      break;
    case "paper":
      switch (computer) {
        case "rock":
          return "You win! Paper > Rock\nPlayer: Paper\nComputer: Rock";
        case "paper":
          return "It's a tie! Paper === Paper\nPlayer: Paper\nComputer: Paper";
        case "scissors":
          return "You lose! Paper < Scissors\nPlayer: Paper\nComputer: Scissors";
      }
      break;
    case "scissors":
      switch (computer) {
        case "rock":
          return "You lose! Scissors < Rock\nPlayer: Scissors\nComputer: Rock";
        case "paper":
          return "You win! Scissors > Paper\nPlayer: Scissors\nnComputer: Paper";
        case "scissors":
          return "It's a tie! Scissors === Scissors\nPlayer: Scissors\nnComputer: Scissors";
      }
      break;
    default:
      console.log("Invalid option");
  }
}

function game() {
  let wins = 0;
  let losses = 0;
  let keepGoing = true;

  while (keepGoing) {
    if (wins === 5) {
      console.log(`You won!\nPlayer wins: ${wins}\nComputer wins: ${losses}`);
      keepGoing = false;
    } else if (losses === 5) {
      console.log(`You lost!\nPlayer wins: ${wins}\nComputer wins: ${losses}`);
      keepGoing = false;
    } else {
      let computerSelection = getComputerChoice();
      let playerSelection = getPlayerSelection();
      let temp = playRound(playerSelection, computerSelection);

      if (temp.includes("win")) {
        ++wins;
      } else if (temp.includes("lose")) {
        ++losses;
      }

      console.log(temp);
    }
  }
}

game();
