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
var answerOptions = document.getElementById("answer-options");
var currentQuestionIndex = 0;
var score = 0;
var timerInterval;
var secondsLeft = 60;

// this variable holds the questions and answers
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
    // checks if the answer is correct
    if (this.value === questions[currentQuestionIndex].answer) {
        console.log("correct!")
    } else {
        console.log("incorrect!")
        secondsLeft -= 10;
        timeEl.textContent = secondsLeft;
    }

    currentQuestionIndex++;

    // this ends the game after the last question, otherwise continue onto the next question
    if (currentQuestionIndex === questions.length) {
        score = secondsLeft;
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
    favoriteEl.removeChild(listEl);
    mySection.removeChild(timeEl);
    score = secondsLeft;
    var inputInitials = document.createElement("input");
    var submitButton = document.createElement("button");
    mySection.appendChild(inputInitials);
    submitButton.textContent = "Submit your initials"
    myFooter.appendChild(submitButton);
    submitButton.addEventListener("click", function() {
        myH1.textContent = "Initials: " + inputInitials.value.toUpperCase() + "  |  Time Left: " + score + " sec";
        localStorage.setItem('Initials', inputInitials.value.toUpperCase());
        localStorage.setItem('Time Left', score);
        mySection.removeChild(inputInitials);
        myFooter.removeChild(submitButton);
        var playAgainBtn = document.createElement("button");
        var highScore = document.getElementById("highscore");
        playAgainBtn.textContent = "Play again?"
        highScore.textContent = "Highscore: " + localStorage.getItem('Initials') + "  |  " + localStorage.getItem('Time Left') + " sec";
        mySection.appendChild(playAgainBtn);
        playAgainBtn.addEventListener("click", function () {
            location.reload();
        });
    });


    // submit button that fires a save score function to grab value of initials and score and set it into local storage
        // create function to get initials and scores from local storage and re-render to page as a high score section



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

    // starts the countdown timer
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remain";
    
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver();
        };
    }, 1000);
});