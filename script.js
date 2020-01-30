let start = document.getElementById("start");
let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
let counter = document.getElementById("counter");
let timeGauge = document.getElementById("timeGauge");
let progress = document.getElementById("progress");
let scoreDiv = document.getElementById("highScore");

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
        question: "Is Java the samething as Javascript?",
        choiceA: "yes",
        choiceB: "no",
        choiceC: "it used to be",
        choiceD: "only on Mondays",
        answer: "B"
    }
];


let lastQuestion = questions.length - 1;
let whichQuestion = 0;

function showQuestion(){
    let currentQuestion = questions[whichQuestion];
    question.innerHTML = "<p>" + currentQuestion.question + "</p>";
    choiceA.innterHTML = currentQuestion.choiceA;
    choiceB.innerHTML = currentQuestion.choiceB;
    choiceC.innterHTML = currentQuestion.choiceC;



}
