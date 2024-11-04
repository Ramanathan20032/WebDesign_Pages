const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text : "Shark", correct: false},
            {text : "Blue Whale", correct: true},
            {text : "Elephant", correct: false},
            {text : "Girafee", correct: false},
        ]
    },
    {
        question: "Which is the fastest Animal in the World?",
        answers: [
            {text: "Chettah", correct: true},
            {text: "Tiger", correct: false},
            {text: "Lion", correct: false},
            {text: "Panther", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text : "kalahari", correct: false},
            {text : "Gobi", correct: false},
            {text : "Sahara", correct: true},
            {text : "Antartica", correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Africa", correct: false},
            {text: "Arctica", correct: false},
            {text: "Australia", correct: true},
        ]
    }
]

const questionElement = document.getElementById('questions')
const answerButtons = document.getElementById('answer-buttons')
const NextButton = document.getElementById('next-btn') 

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    NextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.map((answer) => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerButtons.appendChild(button)

        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
}

function resetState(){
    NextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach((button) => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    NextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`
    NextButton.innerHTML = "Play Again"
    NextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}

NextButton.addEventListener('click', ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        // playAgain()
        startQuiz();
    }
})

startQuiz()