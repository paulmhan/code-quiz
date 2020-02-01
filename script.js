// select all html elements 
let instruction = document.getElementById("instruction")
let start = document.getElementById("start");
let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
let time = document.getElementById("time");
let scoreDiv = document.getElementById("score");
let finalScore = document.getElementById("final-score");
let restart = document.getElementById("restart");
let correct = document.getElementById("correct");
let initialsInput = document.getElementById("initials");
let submitButton = document.getElementById("submit");
let msgDiv = document.getElementById("msg");
let formDiv = document.getElementById("form");
let hScore = document.getElementById("high-score")
let names = document.getElementById("names")
let title = document.getElementById("title");
let currentQ;

//list of all of my questions 
const questions = [
    {
        question: "Which of the following is NOT a javascript data type?",
        choiceA: "Array",
        choiceB: "Object",
        choiceC: "Table",
        choiceD: "String",
        correct: "C"
    },
    {
        question: "Which parenthesis type is used to invoke functions?",
        choiceA: "{}",
        choiceB: "[]",
        choiceC: "||",
        choiceD: "()",
        correct: "D"
    },
    {
        question: "What will this statement return: console.log('7' == 7)",
        choiceA: "true",
        choiceB: "false",
        choiceC: "maybe",
        choiceD: "error",
        correct: "A"
    },
    {
        question: "What will this statement return: console.log('7' === 7)",
        choiceA: "true",
        choiceB: "false",
        choiceC: "maybe",
        choiceD: "error",
        correct: "B"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        correct: "C"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choiceA: "quotes",
        choiceB: "curly brackets",
        choiceC: "parantheses",
        choiceD: "square brackets",
        correct: "C"
    },

    {
        question: "Which of these HTML tags do we put our javascript in?",
        choiceA: "<js>",
        choiceB: "<java>",
        choiceC: "<script>",
        choiceD: "<javascript>",
        correct: "C"
    },
    {
        question: "How do you add a comment in Javascript?",
        choiceA: "//",
        choiceB: "<!-->",
        choiceC: "..",
        choiceD: "||",
        correct: "A"
    },
    {
        question: "Which parenthesis type is used to create an array?",
        choiceA: "{}",
        choiceB: "[]",
        choiceC: "||",
        choiceD: "()",
        correct: "B"
    },
    {
        question: "Is Java the same thing as Javascript?",
        choiceA: "yes",
        choiceB: "no",
        choiceC: "it used to be",
        choiceD: "only on Mondays",
        correct: "B"
    }
];

//create all variables here
let lastQ = questions.length - 1;
let indexQ = 0;
let score = 0;
let timeLeft = 90;
let counter = 0;

//render a question 
function renderQuestion() {
    currentQ = questions[indexQ];
    if ((lastQ+1) === counter){
        renderFinalScore();
        restart.style.display = "block";
        formDiv.style.display = "block";
    } else {
        counter++;
        question.innerHTML = "<p>" + currentQ.question + "</p>";
        choiceA.textContent = currentQ.choiceA;
        choiceB.textContent = currentQ.choiceB;
        choiceC.textContent = currentQ.choiceC;
        choiceD.textContent = currentQ.choiceD;
        
    } 
}

//start quiz
start.addEventListener("click", startQuiz);

function startQuiz() {
    hScore.style.display = "none";
    start.style.display = "none";
    instruction.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    scoreDiv.style.display = "block";
    scoreDiv.textContent = `Current Score: ${score}`;
    renderTimer();
}


//render timer

function renderTimer() {
    let timerInterval = setInterval(function () {
        timeLeft--;
        time.textContent = `Seconds Left: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            renderFinalScore();
            restart.style.display = "block";
            formDiv.style.display = "block";
            

        }
    }, 1000);
}

// check if answers are right and display "correct" or "incorrect" as message

function checkAnswer(answer) {
    if (answer === questions[indexQ].correct) {
        score++;
        answerCorrect();
        scoreDiv.textContent = `Current Score: ${score}`;
        indexQ++;
        renderQuestion();
        
    } else if (answer != questions[indexQ].correct) {
        answerWrong();
        timeLeft -= 10;
        indexQ++;
        renderQuestion();
    }
       
}

function answerCorrect() {
    correct.textContent = "Correct!";

}

function answerWrong() {
    correct.textContent = "Incorrect!"
}


//render final score

function renderFinalScore() {
    quiz.style.display = "none";
    finalScore.style.display = "block";
    hScore.style.display = "block";
    finalScore.textContent = `Good job! You scored ${score} point(s)!`

}

//restart option 
restart.addEventListener("click", restartQuiz);

function restartQuiz() {
    restart.style.display = "none";
    finalScore.style.display = "none";
    formDiv.style.display = "none";
    hScore.style.display = "none";
    correct.textContent = "";
    counter = 0;
    score = 0;
    timeLeft = 5;
    lastQ = questions.length - 1;
    indexQ = 0;
    startQuiz();
}

//submit Initials to high score
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    let initials = document.querySelector("#initials").value;
    if (initials === "") {
        displayMessage("error", "Initials cannot be blank");
    } else {
        displayMessage("success", "Saved successfully");
        localStorage.setItem(initials, score);
        showHighScore();
    }
});

hScore.addEventListener("click", showHighscore);



function showHighscore(){
    hScore.style.alignContent = "center";
    hScore.style.textAlign = "center";
    finalScore.style.display = "none";
    formDiv.style.display = "none";
    restart.style.display = "block";
    title.style.display = "none";
    for(let i in localStorage)
{
    console.log(localStorage[i]);
}
}



//     for(let key in localStorage) {
//         names.append(localStorage.getItem(key));
//       }
// }

