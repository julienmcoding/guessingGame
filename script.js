let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// function to generate a secret number 
const generateTarget = (secretNum) => {
    secretNum = Math.floor(Math.random() * 10);
    return secretNum;
}

// method used in the function below
const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

// the function to compare guesses and determine the winner + alert if out of range
function compareGuesses(userGuess, computerGuess, secretTarget) {
    if(userGuess < 0 || userGuess > 9) {
        alert('Please enter a number between 0 and 9');
    } else if(getAbsoluteDistance(secretTarget, userGuess) <= getAbsoluteDistance(secretTarget, computerGuess)) {
        return true;
    } else {
        return false;
    } 
}

// the function to update the score
const updateScore = (winner) => {
    if(winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

// the function to update the round number
const advanceRound = () => currentRoundNumber += 1;
