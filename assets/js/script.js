// assignment codes
var startButton = document.getElementById('start')
var showHighScores = document.getElementById('high-scores')
var timerEl = document.getElementById('time')

// timer for 75 seconds

function countdown() {
    var timeLeft = 75;
    // timerEl.textContent
        
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
        timerEl.style.float = 'right';
        timerEl.style.marginLeft= '1150px';
        timerEl.style.marginTop = '20px'
        timerEl.style.fontSize = 'x-large';
        timerEl.innerHTML = 'Time: ' + timeLeft; 
        // console.log(timeLeft);
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