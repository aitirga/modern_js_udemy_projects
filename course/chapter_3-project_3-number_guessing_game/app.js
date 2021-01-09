/*
GAME FUNCTION:
- Player must guess a number between a min and max numbers
- Players gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
 */

// Game values
let min = 8,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const $game = document.querySelector('#game'),
    $minNum = document.querySelector('.min-num'),
    $maxNum = document.querySelector('.max-num'),
    $guessBtn = document.querySelector('#guess-btn'),
    $guessInput = document.querySelector('#guess-input'),
    $message = document.querySelector('.message');


// Assign UI min and max
$minNum.textContent = min
$maxNum.textContent = max

// Play again event listener
$game.addEventListener('mousedown', function (e){
    if (e.target.className === 'play-again')
    window.location.reload()
})

// Listen for guess

$guessBtn.addEventListener('click', function () {
        let guess = parseInt($guessInput.value)
        // Validate
        if (isNaN(guess) || guess < min || guess > max) {
            setMessage(`Please enter a number between ${min} and ${max}`, 'red')
        } else {
            // Check if won
            if (guess === winningNum) {
                gameOver(true, `${winningNum} is correct, YOU WIN!`)

            } else {
                guessesLeft -= 1
                if (guessesLeft === 0) {
                    // Game over - lost
                    gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)
                } else {
                    // Tell user the number is wrong
                    $guessInput.style.borderColor = 'red'
                    $guessInput.value = ''
                    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')

                }
                // setMessage(`The number ${guess} is not correct, you have ${guessesLeft} more guesses`, 'red')
            }
        }
    }
)

function setMessage(msg, color) {
    $message.textContent = msg
    $message.style.color = color
}

// Game over
function gameOver(won, msg) {
    let color
    won === true ? color = 'green' : color = 'red'
    // Dissable input
    $guessInput.disabled = true
    // Change border color
    $guessInput.style.borderColor = color
    // Set message
    setMessage(msg, color)

    // Play again?
    $guessBtn.value = 'Play Again'
    $guessBtn.className += 'play-again'
}

// Get Winning Number
function getRandomNum (min, max) {
    console.log(Math.floor(min + Math.random()*(max - min)))
    return Math.floor(min + Math.random()*(max - min))
}