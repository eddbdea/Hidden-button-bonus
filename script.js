function randomNumberInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
function generateButtons() {
    const buttonValue = document.getElementById('buttonCount').value;
    const container = document.getElementById('buttonsContainer');
    container.innerHTML = '';
    const winnerNumber = randomNumberInt(1, buttonValue);

    if (buttonValue >= 1) {
        for(let i = 1; i <= buttonValue; ++i) {
            let button = createButton(i);
            if (i === winnerNumber) {
                button.addEventListener('click', showWinnerMessage);
            } else {
                button.addEventListener('click', showLoserMessage);
            }
            container.appendChild(button);
        }
    } else {
        alert('Please enter a valid number greater than 0.');
    }
}

function showWinnerMessage() {
    return alert('You won!');
}

function showLoserMessage() {
    return alert('You lost!');
}

function createButton(buttonNumber) {
    let button = document.createElement('button');
    button.innerText = 'Button number ' + buttonNumber;
    button.classList.add('game-button');
    return button;
}