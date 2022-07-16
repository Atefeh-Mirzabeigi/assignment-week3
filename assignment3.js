const computerPlay = () => {
  let myArray = ["paper", "rock", "scissors"];
  let randomWorld = Math.floor(Math.random() * 3);
  return myArray[randomWorld];
};

//let playerSelection = prompt();

const playRound = () => {
  let player = prompt("Enter rock, paper or scissors").toLowerCase();
  let computer = computerPlay();

  if (player == "rock" && computer == "paper") {
    return `You Loooose`;
  }
  if (player == "paper" && computer == "rock") {
    return `You win`;
  }
  if (player == "rock" && computer == "scissors") {
    return `You win`;
  }
  if (player == "scissors" && computer == "paper") {
    return `You win`;
  }
  if (player == "paper" && computer == "scissors") {
    return `You Loooose`;
  }
  if (player == "scissors" && computer == "rock") {
    return `You Loooose`;
  } else {
    return "Oh..nobody wins";
  }
};
//console.log(playRound());
//console.log(computerPlay());

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playround = playRound();
    if (playround == "You win") {
      playerScore = playerScore + 1;
    }
    if (playround == "You Loooose") {
      computerScore = computerScore + 1;
    }
  }
  return `Player: ${playerScore}, computer: ${computerScore}`;
};

console.log(game());
