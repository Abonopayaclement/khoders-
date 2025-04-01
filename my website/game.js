let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    attempts++;

    if (userGuess === secretNumber) {
        message.innerHTML = `🎉 Congratulations! You guessed it in ${attempts} tries!`;
        message.style.color = "green";
    } else if (userGuess > secretNumber) {
        message.innerHTML = "⬇️ Too high! Try again.";
        message.style.color = "red";
    } else {
        message.innerHTML = "⬆️ Too low! Try again.";
        message.style.color = "red";
    }
}
