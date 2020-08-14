// assignment codes
var startButton = document.getElementById('start')
var showHighScores = document.getElementById('high-scores')

// timer for 75 seconds

function countdown() {
    var timeLeft = 75;
    // timerEl.textContent
        
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
        console.log(timeLeft);
        if (timeLeft > 0) {
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}
        
startButton.onclick = countdown