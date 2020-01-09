let guessValue = document.getElementById('guess-value');
let guessInput = document.getElementById('guess-input');
let message = document.querySelector('.message');

let trysAttemps = {
    trys: 0
}


guessValue.addEventListener('click', function(e) {
    if (guessInput.value === '') {
        console.log('enter a value');
    } else {
        randomNumber();
    }
});

function randomNumber() {
    let number = Math.floor(Math.random() * 10) + 1;
    validation(number);
}

function validation(randomNumber) {
    const number = Number(guessInput.value);
    if (number === randomNumber) {
        gameWinning();
    } else {
        console.log(trysAttemps.trys++);
        if (trysAttemps.trys === 3) {
            tryAgin();
        }
    }


}

function gameWinning() {
    guessValue.disabled = true;
    guessInput.disabled = true;
    message.innerHTML = 'You just won!';
    message.style.color = 'green';
    restart();
}

function tryAgin() {
    guessValue.disabled = true;
    guessInput.disabled = true;
    message.innerHTML = 'You just lost!';
    message.style.color = 'red';
    restart();
}

function restart() {
    let button = document.createElement('button');
    button.type = 'submit';
    button.innerText = 'Restart';
    button.className = 'btn';
    message.appendChild(button);

    button.addEventListener('click', function() {
        location.reload();
    })
}