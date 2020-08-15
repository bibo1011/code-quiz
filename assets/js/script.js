// assignment codes
var startButton = document.getElementById('start');
var showHighScores = document.getElementById('high-scores');
var timerEl = document.getElementById('time');
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var title = document.getElementById("title");
var instruction = document.getElementById("instruction");
var home = document.getElementById('home');

// create questions
var questions = [
    { 
        question: "What is the correct syntax to close the < title > element?",
        choiceA: "< / title >",
        choiceB: "< ! tittle >",
        choiceC: "< ? title >",
        choiceD: "< endtitle >",
        correct: "A"
    },{ 
        question: "Which statement correctly stores data into the Web Storage API?",
        choiceA: "localStorage.getItem ( ' lunch ' , ' sandwich ' ) ",
        choiceB: "localStorage.setItem ( ' lunch ' , ' sandwich ' ) ",
        choiceC: "getItem.localStorage ( ' lunch ' , ' sandwich ' ) ",
        choiceD: "setItem.localStorage ( ' lunch ' , ' sandwich ' ) ",
        correct: "B"
    },{
        question: "How do you leave hidden comments in HTML code?",
        choiceA: " / *  * / ",
        choiceB: "<!-- -->",
        choiceC: " { {  } } ",
        choiceD: " /  /",
        correct: "B"
    },{
        question: "Which of these values is NOT considered false",
        choiceA: "0",
        choiceB: " ' 0 ' ",
        choiceC: "null",
        choiceD: "''",
        correct: "B"
    },{
        question: "What are the CLI commands for Creating a new directory?",
        choiceA: "mkdir < directory name > ",
        choiceB: "cd < directory name > ",
        choiceC: "touch < file name > ",
        choiceD: "rm < file name > ",
        correct: "A"
    }
]
// for (var i = 0; i < questions.length; i++){
//     console.log(questions[i].question);

//     var answer = (questions[i].question);
//     console.log(answer);

//     if (answer === questions[i].correct) {
//         alert("correct");
//     }

// }

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;

function homeDisplay(){
    title.innerHTML = `<h1>Coding Quiz Challenge</h1>`;
    instruction.innerHTML = '<p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>';
    instruction.style.margin = "auto";
}


function renderQuestion(){
    let q = questions[runningQuestion];
        
    question.innerHTML = q.question;  
    question.style.fontSize = "40px";
    question.style.fontWeight = "bold"
    question.style.margin = "50px 350px 10px 350px"
    
    choiceA.innerHTML = q.choiceA;    
    choiceA.style.display = "inline-block"    
    choiceA.style.padding = "20px 40px"    
    choiceA.style.backgroundColor = "#201f58"    
    choiceA.style.textAlign = "center"    
    choiceA.style.width = "135px"    
    choiceA.style.border = "1px solid grey"    
    choiceA.style.borderRadius = "10px"    
    choiceA.style.cursor = "pointer"    
    choiceA.style.margin= "20px"    
    choiceA.style.color = "#fff"
    choiceA.style.fontSize = "25px"

    choiceB.innerHTML = q.choiceB;   
    choiceB.innerHTML = q.choiceB;    
    choiceB.style.display = "inline-block"    
    choiceB.style.padding = "20px 40px"    
    choiceB.style.backgroundColor = "#201f58"    
    choiceB.style.textAlign = "center"    
    choiceB.style.width = "135px"    
    choiceB.style.border = "1px solid grey"    
    choiceB.style.borderRadius = "10px"    
    choiceB.style.cursor = "pointer"    
    choiceB.style.margin= "20px"    
    choiceB.style.color = "#fff"
    choiceB.style.fontSize = "25px"

    choiceC.innerHTML = q.choiceC;   
    choiceC.innerHTML = q.choiceC;    
    choiceC.style.display = "inline-block"    
    choiceC.style.padding = "20px 40px"    
    choiceC.style.backgroundColor = "#201f58"    
    choiceC.style.textAlign = "center"    
    choiceC.style.width = "135px"    
    choiceC.style.border = "1px solid grey"    
    choiceC.style.borderRadius = "10px"    
    choiceC.style.cursor = "pointer"    
    choiceC.style.margin = "20px"    
    choiceC.style.color = "#fff"
    choiceC.style.fontSize = "25px"

    choiceD.innerHTML = q.choiceD;   
    choiceD.innerHTML = q.choiceD;    
    choiceD.style.display = "inline-block"    
    choiceD.style.padding = "20px 40px"    
    choiceD.style.backgroundColor = "#201f58"    
    choiceD.style.textAlign = "center"    
    choiceD.style.width = "135px"    
    choiceD.style.border = "1px solid grey"    
    choiceD.style.borderRadius = "10px"    
    choiceD.style.cursor = "pointer"    
    choiceD.style.margin = "20px"    
    choiceD.style.color = "#fff"
    choiceD.style.fontSize = "25px"
}

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        answerIsCorrect();
    }else{
        // answer is wrong
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    result.innerHTML = "Correct!";
}

// answer is Wrong
function answerIsWrong(){
    result.innerHTML = "Wrong!";
}

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    // quiz.style.display = "block";
    // renderProgress();
    // renderCounter();
    // TIMER = setInterval(renderCounter,1000);
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

    
homeDisplay();


// timer for 75 seconds
function countdown() {
    var timeLeft = 75;
        
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
        }
    }, 1000);
    home.style.display = "none";

    startQuiz();
    
    
    renderQuestion();
    // renderProgress();

    

    
        
        
    
}
startButton.onclick = countdown


