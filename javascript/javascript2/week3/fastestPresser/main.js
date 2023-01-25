const inputTimer = document.getElementById("inputTimer");
const startBtn = document.getElementById("btnGameStrt");
const player1 = document.getElementById("userName1");
const player2 = document.getElementById("userName2");
const count1 = document.getElementById("count1");
const count2 = document.getElementById("count2");

let player1PressCount = 0;
let player2PressCount = 0;

startBtn.addEventListener("click", gameStart);

function gameStart() {
    inputTimer.disabled = true;
    startBtn.disabled = true;
    const totlaNumberOfSeconds = inputTimer.value;
    // Add an event listener for key presses
    document.addEventListener('keyup', countKeyPress)
    setTimeout(endGame, totlaNumberOfSeconds * 1000)

}
function endGame() {
    document.removeEventListener('keyup', countKeyPress)
    if (player1PressCount > player2PressCount) {
        player1.innerHTML += "<br> winner";
        player2.innerHTML += "";

    }
    else if (player1PressCount < player2PressCount) {
        player1.innerHTML += "";
        player2.innerHTML += "<br> winner";

    } else {
        // if both players have same press count game is tie and game over
        player1.innerHTML += " <br> draw";
        player2.innerHTML += " <br> draw";

    }
}

function countKeyPress(e) {
    if (inputTimer.value === 0) {
        e.preventDefault()
        return
    }
    if (e.keyCode === 83) {
        player1PressCount++;
        count1.innerHTML = player1PressCount;
    }

    if (e.keyCode === 76) {
        player2PressCount++
        count2.innerHTML = player2PressCount;
    }
    if (inputTimer.value === 0) {
        console.log("iszero")
    }

}