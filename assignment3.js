const computerPlay = () => {
  let myArray = ["paper", "rock", "scissors"];
  let randomWord = Math.floor(Math.random() * 3);
  return myArray[randomWord];
};

const playerSelection = () => {
  let player = prompt("Enter rock, paper or scissors").toLowerCase();
  if (player !== "rock" && player !== "scissors" && player !== "paper") {
    alert("please choose rock, paper or scissors");
  } else {
    return player;
  }
};
//let playerSelection = prompt();

const playRound = () => {
  let player = playerSelection();
  let computer = computerPlay();

  if (player == "rock" && computer == "paper") {
    console.log("You lose! paper beats rock");
    return `You Loooose`;
  }
  if (player == "paper" && computer == "rock") {
    console.log("You win! paper beats rock");
    return `You win`;
  }
  if (player == "rock" && computer == "scissors") {
    console.log("You win! rock beats scissors");
    return `You win`;
  }
  if (player == "scissors" && computer == "paper") {
    console.log("You win! scissors beats paper");
    return `You win`;
  }
  if (player == "paper" && computer == "scissors") {
    console.log("You lose! scissors beats paper");
    return `You Loooose`;
  }
  if (player == "scissors" && computer == "rock") {
    console.log("You lose! rock beats scissors");
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
