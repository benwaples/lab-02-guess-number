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
const playAgain = document.querySelector('.playAgain');
const gamesWon = document.querySelector('.gamesWon');
const gamesLost = document.querySelector('.gamesLost');


// initialize state
let countDown = 4;
let ticketToMars = 0;

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
        tooHighOrLow.textContent = 'BOOM PACK YOUR BAGS';
        // update the win/loss tab
        remainingGuesses.classList.add('hidden');
        submitGuess.classList.add('hidden');
        guessNumber.classList.add('hidden');
        playAgain.classList.remove('hidden');
    } else if (highOrLow === -1) {
        tooHighOrLow.textContent = 'Not going to mars with that... TOO LOW';
    } else if (highOrLow === 1) {
        tooHighOrLow.textContent = 'If the world depended on you going to mars, the world lost... TOO HIGH';
    }
    countDown --;
    if (countDown === 0) {
        alert('you\'re not an astronaught this time, feel free to try again');
        return;
        // reset game just like about and update win/loss tab
    }
    remainingGuesses.textContent = `You have ${countDown} remaining guesses`;
});


//make restart button