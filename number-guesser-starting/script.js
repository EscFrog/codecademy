let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

function compareGuesses(userGuess, comGuess, secretNum) {
  if (userGuess > 10) {
    alert('You have to enter between 0 to 10');
  }

  const userDistance = Math.abs(secretNum - userGuess);
  const comDistance = Math.abs(secretNum - comGuess);

  // use ternary expression for study.
  return userDistance <= comDistance ? true : false;
}

function updateScore(winner) {
  switch (winner) {
    case 'human':
      humanScore++;
      break;
    case 'computer':
      computerScore++;
      break;
  }
}

const advanceRound = () => currentRoundNumber++;