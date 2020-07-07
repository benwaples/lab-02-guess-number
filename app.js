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

// set event listeners to update state and DOM 
getTicket.addEventListener('click', () => {
    let ticketToMars = randomNumber();
    guessNumber.classList.remove('hidden');
    submitGuess.classList.remove('hidden');
    remainingGuesses.classList.remove('hidden');
    tooHighOrLow.classList.remove('hidden');
    playAgain.classList.remove('hidden');
    getTicket.classList.add('hidden');
    console.log(ticketToMars)
});