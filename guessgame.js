
let randomNumber = Math.floor(Math.random() * 10) + 1;
function guessNumber() {
    let userGuess = parseInt(document.getElementById("guess").value);
    if (userGuess === randomNumber) {
        document.getElementById("message").innerHTML = "Chúc mừng! Bạn đã đoán đúng số " + randomNumber;
    } else {
        document.getElementById("message").innerHTML = "Sai rồi, hãy đoán lại!";
    }
}
