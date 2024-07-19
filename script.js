let startBtn = document.querySelector('#start-btn');
let timerEl = document.querySelector('.timer');
let questionEl = document.querySelector('.questions');
let answerForm = document.querySelector('.answers-form');
let answerBtns = document.querySelectorAll('.answer');
let questionSection = document.querySelector('.hidden');
let scoreDisplay = document.querySelector('.score-display');
let scoreEl = document.querySelector('#score');
let submitForm = document.querySelector('.submit-form');
let initialsInput = document.querySelector('.name');
let response = document.querySelector('#response');

let timeInterval;
let timeLeft = 75;
let qstnIndex = 1;
let score = 0
let quizQuestions = [ {
  
    question: "Commonly used data types do not include:",
    options: ["Strings", "Boolean", "Alert", "Numbers"],
    answer: "Alert"
  },
  {
    question: "The condition in an if/else statement is enclosed within __________",
    options: ["Quotes", "Parentheses", "Curly brackets", "Square Brackets"],
    answer: "Parentheses"   
  },
  
   { 
    question: "Arrays in JavaScript can be used to store",
    options: ["Numbers and Strings", "Other arrays", "Boolean", "All of the above"],
    answer: "All of the above"        
  },
  
   { 
    question: "String values must be enclosed within ____________ when being assigned to variables",
    options: ["Commas", "Curly brackets", "Quotes", "Parentheses"],  
    answer: "Quotes"
  },
  
   {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["Console.log", "For loops", "Terminal/bash", "JavaScript"],
    answer: "Console.log"
      
  },
  ];

const setTime = () => {
        timeInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `${timeLeft} seconds`;
        timerEl.setAttribute('style', 'color: rgb(180, 59, 59)');
        
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

const renderQuestion = () => {
    questionSection.setAttribute('style', 'display: inline;');
    questionEl.textContent = quizQuestions[0].question;
    for (let i = 0; i < answerBtns.length; i++) {
        for (let i = 0; i < quizQuestions[0].options.length; i++) {
        answerBtns[i].innerHTML = quizQuestions[0].options[i];
        }
        answerBtns[i].setAttribute("data-answer", quizQuestions[0].answer)
    }
}
const renderNextQuestion = () => {
    questionSection.setAttribute('style', 'display: inline;');
    questionEl.textContent = quizQuestions[qstnIndex].question;
    for (let i = 0; i < answerBtns.length; i++) {
        for (let i = 0; i < quizQuestions[qstnIndex].options.length; i++) {
        answerBtns[i].innerHTML = quizQuestions[qstnIndex].options[i];
        }
    answerBtns[i].setAttribute("data-answer", quizQuestions[qstnIndex].answer)

    }
}
const displayScore = () => {
    scoreDisplay.setAttribute('style', 'display: block;');
    if (score < 0) {
        scoreEl.textContent = 0;
    } else {
    scoreEl.textContent = score;
    timerEl.textContent = ' ';
    }
}

startBtn.addEventListener('click', () => {
    setTime();
    renderQuestion();
})

answerBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let answer = e.target.getAttribute('data-answer')
        if (e.target.innerHTML === answer) {
            score++;
            response.textContent = 'Correct!!! ✅';
            response.setAttribute('style', 'color: green;')
        } else {
            score--;
            timeLeft-=10;
            response.textContent = 'Wrong 😢';
            response.setAttribute('style', 'color: red;')
        }
        if (qstnIndex > 4 || timeLeft === 0) {
            questionSection.setAttribute('style', 'display: none;')
            clearInterval(timeInterval);
            displayScore();

        } else {
        renderNextQuestion();
        qstnIndex++;
        }
    })

});

submitForm.addEventListener('submit', () => {
    let grade = {
        initials: initialsInput.value.trim(),
        testScore: (score > 0) ? score : 0
    };
    localStorage.setItem('grade', JSON.stringify(grade));
})
