var body = document.body;
var myH1 = document.getElementById("myh1");
var mySection = document.getElementById("mysection")
var myP = document.getElementById("myp");
var myButton = document.getElementById("mybutton");
var startButton = document.getElementById("startButton");
var myFooter = document.getElementById("myfooter");
var footerH4 = document.getElementById("footerh4");
var timeEl = document.getElementById("timeRemaining");
var favoriteEl = document.createElement("div");
var listEl = document.createElement("ol");
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");
var answerOptions = document.getElementById("answer-options");
var currentQuestionIndex = 0;

// var score = 0;
var timerInterval;
var secondsLeft = 60;

var questions = [
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        options: ["backslashes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        question: "Commonly used data types do NOT include:",
        options: ["strings", "booleans", "alert", "numbers"],
        answer: "alert"
    },

    {
        question: "Arrays in javascript can be used to store ____.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },

    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "asterisks"],
        answer: "quotes"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

function handleAnswer() {
    if (this.value === questions[currentQuestionIndex].answer) {
        console.log("correct!")
    } else {
        console.log("incorrect!")
        secondsLeft -= 10;
        timeEl.textContent = secondsLeft;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        gameOver();
    } else {
        displayQuestions();
    }
};

function displayQuestions() {
    var currentQuestion = questions[currentQuestionIndex];
    listEl.textContent = currentQuestion.question;
    currentQuestion.options.forEach(element => {
        var li = document.createElement('button');
        li.textContent = element;
        li.setAttribute("value", element);
        li.onclick = handleAnswer;
        listEl.appendChild(li);
    });
}

function gameOver() {
    clearInterval(timerInterval);
    myH1.textContent = "GAME OVER!"
    timeEl.textContent = "";
    favoriteEl.removeChild(listEl);
    mySection.removeChild(timeEl);
    // set score to secondsLeft
    // display score
    // add input to take in user initials
    // submit button that fires a save score function to grab value of initials and score and set it into local storage
        // create function to get initials and scores from local storage and re-render to page as a high score section
    // add button to restart game


}

// starts the first question
startButton.addEventListener("click", function() {

    // remove some of the starting html elements
    mySection.removeChild(myP);
    myButton.removeChild(startButton);
    myFooter.removeChild(footerH4);

    displayQuestions();

    // adds new html elements
    body.appendChild(favoriteEl);
    favoriteEl.appendChild(listEl);
    listEl.setAttribute("class", "answer-options");
    // listEl.appendChild(li1);
    // listEl.appendChild(li2);
    // listEl.appendChild(li3);
    // listEl.appendChild(li4);
    
    // li1.addEventListener("click", handleAnswer)
    // li2.addEventListener("click", handleAnswer)
    // li3.addEventListener("click", handleAnswer)
    // li4.addEventListener("click", handleAnswer)

    // favoriteEl.setAttribute("style", "font-size:20px;");
    // listEl.setAttribute("style", "padding:20px;");
    // li1.setAttribute("style", "padding: 5px; margin-left: 35px;");
    // li2.setAttribute("style", "padding: 5px; margin-left: 35px;");
    // li3.setAttribute("style", "padding: 5px; margin-left: 35px;");
    // li4.setAttribute("style", "padding: 5px; margin-left: 35px;");

    // starts the countdown timer
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remain";
    
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Your time is up.";
            // gameOver();
        };
    }, 1000);
});