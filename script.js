function getComputerChoice() {
  // gets random number, either 0 1 2
  let randomInt = Math.floor(Math.random() * 3);

  switch (randomInt) {
    case 0:
      choice = "Rock";
      break;
    case 1:
      choice = "Paper";
      break;
    case 2:
      choice = "Scissors";
      break;
  }
}

let choice = "";
getComputerChoice();
