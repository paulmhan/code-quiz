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
let timeLeft = 15;

//render a question 
function renderQuestion() {
    let currentQ = questions[indexQ];
    question.innerHTML = "<p>" + currentQ.question + "</p>";
    choiceA.textContent = currentQ.choiceA;
    choiceB.textContent = currentQ.choiceB;
    choiceC.textContent = currentQ.choiceC;
    choiceD.textContent = currentQ.choiceD;
}

//start quiz
start.addEventListener("click", startQuiz);

function startQuiz() {
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
    } else {
        answerWrong();
        timeLeft -= 10;
    }
    if (indexQ < lastQ) {
        indexQ++;
        renderQuestion();
    } else {
        clearInterval(timerInterval);
        renderFinalScore();
        restart.style.display = "block";
        formDiv.style.display = "block";
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
    finalScore.textContent = `Good job! You scored ${score} point(s)!`

}

//restart option 
restart.addEventListener("click", restartQuiz);

function restartQuiz() {
    restart.style.display = "none";
    finalScore.style.display = "none";
    formDiv.style.display = "none";
    correct.textContent = "";
    score = 0;
    timeLeft = 15;
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
        localStorage.setItem("initials", initials);
        renderLastRegistered();
    }
});


// Need help with: 
// 1) Hiding "correct" and "incorrect"
// 2) Ending game when last question is chosen, regardless if question is right or wrong
// 3) Allowing one to put initials and save initials to high score/local storage
// 4) Function to clear all high scores