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
            let button = createButton(i, winnerNumber, container);
        }
    } else {
        alert('Please enter a valid number greater than 0.');
    }
}

function createButton(buttonNumber, winnerNumber, container) {
    let button = document.createElement('button');
    button.innerText = 'Button number ' + buttonNumber;
    button.classList.add('game-button');
    if (buttonNumber === winnerNumber) {
        button.addEventListener('click', () => {
            alert('Winner button!');
        });
    } else {
        button.addEventListener('click', () => {
            alert('Looser button!');
        });
    }
    container.appendChild(button);
}