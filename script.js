let startBtn = document.querySelector('#start-btn');
let timerEl = document.querySelector('.timer');
let questionEl = document.querySelector('.questions');
let answerForm = document.querySelector('answers-form');
let answerBtns = document.querySelectorAll('.answer');
let questionSection = document.querySelector('.hidden');

let timeLeft = 75;
let quizQuestions = [ {
  
    question: "Commonly used data types do not include:",
    options: ["Strings", "Boolean", "Alert", "Numbers"]
  },
  {
    question: "The condition in an if/else statement is enclosed within __________",
    options: ["Quotes", "Parentheses", "Curly brackets", "Square Brackets"]   
  },
  
   { 
    question: "Arrays in JavaScript can be used to store",
    options: ["Numbers and Strings", "Other arrays", "Boolean", "All of the above"],        
  },
  
   { 
    question: "String values must be enclosed within ____________ when being assigned to variables",
    options: ["Commas", "Curly brackets", "Quotes", "Parentheses"],  
  },
  
   {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["Console.log", "For loops", "Terminal/bash", "JavaScript"]
      
  },
  ];

const setTime = () => {
    let timeInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `${timeLeft} seconds left`;
        
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}


startBtn.addEventListener('click', () => {
    setTime();
    renderQuestion();
})

const renderQuestion = () => {
    questionSection.setAttribute('style', 'display: inline;');
    questionEl.textContent = quizQuestions[4].question;
    for (let i = 0; i < answerBtns.length; i++) {
        for (let i = 0; i < quizQuestions[4].options.length; i++) {
        answerBtns[i].innerHTML = quizQuestions[4].options[i];
        }
    }
}