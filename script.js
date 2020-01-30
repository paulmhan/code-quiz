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
let progress = document.getElementById("progress");
let scoreDiv = document.getElementById("score");

//list of all of my questoins 
const questions = [
    {
        question: "Which of the following is NOT a javascript data type?",
        choiceA: "Array",
        choiceB: "Object",
        choiceC: "Table",
        choiceD: "String",
        answer: "C"
    },
    {
        question: "Which parenthesis type is used to invoke functions?",
        choiceA: "{}",
        choiceB: "[]",
        choiceC: "||",
        choiceD: "()",
        answer: "D"
    },
    {
        question: "What will this statement return: console.log('7' == 7)",
        choiceA: "true",
        choiceB: "false",
        choiceC: "maybe",
        choiceD: "error",
        answer: "A"
    },
    {
        question: "What will this statement return: console.log('7' === 7)",
        choiceA: "true",
        choiceB: "false",
        choiceC: "maybe",
        choiceD: "error",
        answer: "B"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        answer: "C"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choiceA: "quotes",
        choiceB: "curly brackets",
        choiceC: "parantheses",
        choiceD: "square brackets",
        answer: "C"
    },

    {
        question: "Which of these HTML tags do we put our javascript in?",
        choiceA: "<js>",
        choiceB: "<java>",
        choiceC: "<script>",
        choiceD: "<javascript>",
        answer: "C"
    },
    {
        question: "How do you add a comment in Javascript?",
        choiceA: "//",
        choiceB: "<!-->",
        choiceC: "..",
        choiceD: "||",
        answer: "A"
    },
    {
        question: "Which parenthesis type is used to create an array?",
        choiceA: "{}",
        choiceB: "[]",
        choiceC: "||",
        choiceD: "()",
        answer: "B"
    },
    {
        question: "Is Java the same thing as Javascript?",
        choiceA: "yes",
        choiceB: "no",
        choiceC: "it used to be",
        choiceD: "only on Mondays",
        answer: "B"
    }
];

//create all variables here
let lastQ = questions.length - 1;
let indexQ = 0;
let score = 0
let timeLeft = 90

//render a question 
function renderQuestion(){
    let currentQ = questions[indexQ];
    question.innerHTML = "<p>" + currentQ.question + "</p>";
    choiceA.innterHTML = currentQ.choiceA;
    choiceB.innerHTML = currentQ.choiceB;
    choiceC.innterHTML = currentQ.choiceC;
    choiceD.innterHTML = currentQ.choiceD;
}

//start quiz
start.addEventListener("click", startQuiz);

function startQuiz(){
    start.style.display = "none";
    instruction.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderScore();
    renderTimer();
}

//render current score
function renderCurrentScore(){
    for (let i = 0; i <= lastQ; i++){
        progress.innerHTML = score
    }
}

//render timer


function renderTimer(){
    let timerInterval = setInterval(function(){
        timeLeft--;
        time.textContent = `You have ${timeLeft} seconds remaining.`;

        if(timeLeft === 0){
            clearInterval(timerInterval);
            renderFinalScore();
        }
    }, 1000);
}

// checkAnwer

function checkAnswer(answer){
    if( answer === questions[indexQ].correct){
        score++;
    }else{
        timeLeft -= 10;
    } 
    if(indexQ < lastQ){
        indexQ++;
        renderQuestion();
    }else{
        clearInterval(timerInterval);
        renderFinalScore();
    }
}


//render final score

function renderFinalScore(){
    scoreDiv.style.display = "block";
    scoreDiv.textContent = `Good job! You scored ${score} points!`

}


