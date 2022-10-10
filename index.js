// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1DiceRoll = 0
let player2DiceRoll = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const overlay = document.getElementById("overlay")
const modal = document.getElementById("modal")

function gameOver() {
    overlay.style.display = "block"
    modal.style.display = "block"
    rollBtn.style.visibility = "hidden"
    resetBtn.style.display = "block"
    confetti();
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    if (player1Turn) {
        player1Score += randomNumber
        player1DiceRoll++
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2DiceRoll++
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if ((player1Score >= 20) && (player1DiceRoll == player2DiceRoll) && (player1Score > player2Score)) {
        winner.textContent = "Player 1️⃣ is the winner 🎉"
        gameOver()
    }  else if ((player2Score >= 20)  && (player2DiceRoll == player1DiceRoll) && (player2Score > player1Score)) {
        winner.textContent = "Player 2️⃣ is the winner 🎉"
        gameOver()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.visibility = "visible"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    modal.style.display = "none"
    overlay.style.display = "none"
}
