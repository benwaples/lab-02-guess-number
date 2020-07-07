// import functions and grab DOM elements
import {
    randomNumber,
    compareNumber
} from './compareNumber.js';

const getTicket = document.querySelector('.getTicket');
const guessNumber = document.querySelector('.guessNumber');
const submitGuess = document.querySelector('.submitGuess');
const remainingGuesses = document.querySelector('.remainingGuesses');
const tooHighOrLow = document.querySelector('.tooHighOrLow');
const gamesWon = document.querySelector('.gamesWon');
const gamesLost = document.querySelector('.gamesLost');
const playAgain = document.querySelector('.playAgain');


// initialize state
let countDown = 4;
let ticketToMars = 0;
let countWins = 0;
let countLosses = 0;

// set event listeners to update state and DOM 

// toggle the game to display where to play
getTicket.addEventListener('click', () => {
    ticketToMars = randomNumber();
    guessNumber.classList.remove('hidden');
    submitGuess.classList.remove('hidden');
    remainingGuesses.classList.remove('hidden');
    remainingGuesses.textContent = `You have ${countDown} remaining guesses`;
    tooHighOrLow.classList.remove('hidden');
    getTicket.classList.add('hidden');
    console.log(ticketToMars)
});

//game play
submitGuess.addEventListener('click', () => {
    const attempt = Number(guessNumber.value);
    let highOrLow = compareNumber(ticketToMars, attempt);
    if (highOrLow === 0) {
        // wins game. update ticket count and give reset button
        tooHighOrLow.textContent = 'BOOM PACK YOUR BAGS';
        remainingGuesses.classList.add('hidden');
        submitGuess.classList.add('hidden');
        guessNumber.classList.add('hidden');
        playAgain.classList.remove('hidden');
        tooHighOrLow.classList.add('hidden');
        countWins ++;
        gamesWon.textContent = `You have won ${countWins} tickets`;
    } else if (highOrLow === -1) {
        tooHighOrLow.textContent = 'Not going to mars with that... TOO LOW';
    } else if (highOrLow === 1) {
        tooHighOrLow.textContent = 'If the world depended on you going to mars, the world lost... TOO HIGH';
    }
    countDown --;
    if (countDown === 0) {
        // reset game just like above and update win/loss tab
        alert('you\'re not an astronaught this time, feel free to try again');
        remainingGuesses.classList.add('hidden');
        submitGuess.classList.add('hidden');
        guessNumber.classList.add('hidden');
        tooHighOrLow.classList.add('hidden');
        playAgain.classList.remove('hidden');
        countLosses ++;
        gamesLost.textContent = `You have lost ${countLosses} tickets`;
    }
    remainingGuesses.textContent = `You have ${countDown} remaining guesses`;
});

//toggle for resetting the game to play again
playAgain.addEventListener('click', () => {
    getTicket.classList.remove('hidden');
    playAgain.classList.add('hidden');
    countDown = 4;

});