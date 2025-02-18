let guessNumber;
let tries;

const guessedNumber = document.getElementById('text');
const submit = document.getElementById("submit");

const f1 = document.getElementById("f1");
const f2 = document.getElementById("f2");
const btn1 = document.getElementById("btn1");
const res = document.getElementById("res");
const result = document.querySelector(".result");

const wantToPlayAgain = document.getElementById('output');
const pl = document.getElementById('pl');
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const difficultySelect = document.getElementById("difficulty");

// Start Game on Difficulty Selection
btn1.addEventListener('click', () => {
    f1.classList.add('disappear');
    res.classList.remove('disappear');
    f2.classList.remove('disappear');

    let level = difficultySelect.value;
    if (level === "easy") {
        play(10, 10);
    } else if (level === "medium") {
        play(5, 50);
    } else {
        play(3, 100);
    }
});

function play(maxTries, range) {
    tries = maxTries;
    guessNumber = Math.floor(Math.random() * range) + 1;
    console.log(`Tries: ${tries}, Secret Number: ${guessNumber}`);

    submit.addEventListener('click', handleGuess);
}

function handleGuess() {
    let userGuess = parseInt(guessedNumber.value);

    if (isNaN(userGuess)) {
        alert("Please enter a valid number!");
        return;
    }

    if (tries > 1 && userGuess !== guessNumber) {
        tries--;
        result.textContent = `Wrong! ${tries} tries left.`;
        result.style.backgroundColor = '#ff0000';
        result.classList.remove("wrong");
        void result.offsetWidth ;
        result.classList.add("wrong");
    } else {
        let message = document.createElement("h1");

        if (tries === 1 && userGuess !== guessNumber) {
            result.textContent = `Wrong! 0 tries left.`;
            message.textContent = "Sorry, you lost!";
            message.style.color = 'red';
        } else {
            message.textContent = "Congratulations, you won!";
            message.style.color = 'green';
        }

        wantToPlayAgain.insertBefore(message, wantToPlayAgain.firstChild);
        f2.classList.add('disappear');
        pl.classList.remove('disappear');
        wantToPlayAgain.classList.remove('disappear');

        submit.removeEventListener('click', handleGuess);
    }
}

// Play Again or End Game
yesBtn.addEventListener('click', () => {
    location.reload(); // Restart the game
});

noBtn.addEventListener('click', () => {
    alert("Game over! Thanks for playing.");
    location.reload();
});
