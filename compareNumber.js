export function randomNumber() {
    return Math.ceil(Math.random() * 20);
}

export function compareNumber(ticket, guess) {
    if (guess < 1 || guess > 20){
        alert('read the hint');
    }
    else if (ticket === guess) {
        return 0;
    } else if (ticket > guess) {
        return -1;
    } else if (ticket < guess) {
        return 1;
    }

}