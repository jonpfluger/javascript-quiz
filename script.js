var highscore = 0;
var secondsLeft = 60;
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
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");


// function gameOver() {
    // code block
// }




// starts the first question
startButton.addEventListener("click", function() {

    mySection.removeChild(myP);
    myButton.removeChild(startButton);
    myFooter.removeChild(footerH4);

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remain";
    
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Your time is up.";
            // gameOver();
        }
    }, 1000);

    function question1() {
        listEl.textContent = "The condition in an if / else statement is enclosed within ____.";
        li1.textContent = "quotes";
        li2.textContent = "curly brackets";
        li3.textContent = "parentheses";
        li4.textContent = "square brackets";
    
        // mySection.removeChild(myP);
        // myButton.removeChild(startButton);
        // myFooter.removeChild(footerH4);
    
        body.appendChild(favoriteEl);
        favoriteEl.appendChild(listEl);
        listEl.appendChild(li1);
        listEl.appendChild(li2);
        listEl.appendChild(li3);
        listEl.appendChild(li4);
    
        favoriteEl.setAttribute("style", "font-size:20px;");
        listEl.setAttribute("style", "padding:20px;");
        li1.setAttribute("style", "padding: 5px; margin-left: 35px;");
        li2.setAttribute("style", "padding: 5px; margin-left: 35px;");
        li3.setAttribute("style", "padding: 5px; margin-left: 35px;");
        li4.setAttribute("style", "padding: 5px; margin-left: 35px;");
    }

    question1();

    function question2() {
        listEl.textContent = "Commonly used data types do NOT include:";
        li1.textContent = "strings";
        li2.textContent = "booleans";
        li3.textContent = "alerts";
        li4.textContent = "numbers";
    
        // mySection.removeChild(myP);
        // myButton.removeChild(startButton);
        // myFooter.removeChild(footerH4);
    
        body.appendChild(favoriteEl);
        favoriteEl.appendChild(listEl);
        listEl.appendChild(li1);
        listEl.appendChild(li2);
        listEl.appendChild(li3);
        listEl.appendChild(li4);
    
        favoriteEl.setAttribute("style", "font-size:20px;");
        listEl.setAttribute("style", "padding:20px;");
        li1.setAttribute("style", "padding: 5px; margin-left: 35px;");
        li2.setAttribute("style", "padding: 5px; margin-left: 35px;");
        li3.setAttribute("style", "padding: 5px; margin-left: 35px;");
        li4.setAttribute("style", "padding: 5px; margin-left: 35px;");
    }

    function question3() {
        listEl.textContent = "Arrays in javascript can be used to store ____.";
        li1.textContent = "numbers and strings";
        li2.textContent = "other arrays";
        li3.textContent = "booleans";
        li4.textContent = "all of the above";
    
        // mySection.removeChild(myP);
        // myButton.removeChild(startButton);
        // myFooter.removeChild(footerH4);
    
        body.appendChild(favoriteEl);
        favoriteEl.appendChild(listEl);
        listEl.appendChild(li1);
        listEl.appendChild(li2);
        listEl.appendChild(li3);
        listEl.appendChild(li4);
    
        favoriteEl.setAttribute("style", "font-size:20px;");
        listEl.setAttribute("style", "padding:20px;");
        li1.setAttribute("style", "padding: 5px; margin-left: 35px;");
        li2.setAttribute("style", "padding: 5px; margin-left: 35px;");
        li3.setAttribute("style", "padding: 5px; margin-left: 35px;");
        li4.setAttribute("style", "padding: 5px; margin-left: 35px;");
    }

    function question4() {
        listEl.textContent = "String values must be enclosed within ____ when being assigned to variables.";
        li1.textContent = "commas";
        li2.textContent = "curly brackets";
        li3.textContent = "quotes";
        li4.textContent = "parentheses";
    
        // mySection.removeChild(myP);
        // myButton.removeChild(startButton);
        // myFooter.removeChild(footerH4);
    
        body.appendChild(favoriteEl);
        favoriteEl.appendChild(listEl);
        listEl.appendChild(li1);
        listEl.appendChild(li2);
        listEl.appendChild(li3);
        listEl.appendChild(li4);
    
        favoriteEl.setAttribute("style", "font-size:20px;");
        listEl.setAttribute("style", "padding:20px;");
        li1.setAttribute("style", "padding: 5px; margin-left: 35px;");
        li2.setAttribute("style", "padding: 5px; margin-left: 35px;");
        li3.setAttribute("style", "padding: 5px; margin-left: 35px;");
        li4.setAttribute("style", "padding: 5px; margin-left: 35px;");
    }

    function question5() {
        listEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
        li1.textContent = "JavaScript";
        li2.textContent = "terminal/bash";
        li3.textContent = "for loops";
        li4.textContent = "console.log";
    
        // mySection.removeChild(myP);
        // myButton.removeChild(startButton);
        // myFooter.removeChild(footerH4);
    
        body.appendChild(favoriteEl);
        favoriteEl.appendChild(listEl);
        listEl.appendChild(li1);
        listEl.appendChild(li2);
        listEl.appendChild(li3);
        listEl.appendChild(li4);
    
        favoriteEl.setAttribute("style", "font-size:20px;");
        listEl.setAttribute("style", "padding:20px;");
        li1.setAttribute("style", "padding: 5px; margin-left: 35px;");
        li2.setAttribute("style", "padding: 5px; margin-left: 35px;");
        li3.setAttribute("style", "padding: 5px; margin-left: 35px;");
        li4.setAttribute("style", "padding: 5px; margin-left: 35px;");
    }
    
    // var questions = [question1, question2, question3, question4, question5];

    // for (var i = 0; i < questions.length; i++) {
        // questions[i]
    // }

});




// myH1.style.color = 'pink';
// myH1.setAttribute("id", "my-heading");
// myH1.setAttribute("style", "color: blue; font-size: 30px");
// console.log(a.getAttribute("href"));
// window.addEventListener("mouseover", function() {
    // code block
// })



/*
the condition in an if / else statement is enclosed within ____.
1. quotes
2. curly brackets
3. parentheses
4. square brackets

commonly used data types do NOT include:
1. strings
2. booleans
3. alerts
4. numbers

arrays in javascript can be used to store ____.
1. numbers and strings
2. other arrays
3. booleans
4. all of the above

string values must be enclosed within ____ when being assigned to variables
1. commas
2. curly brackets
3. quotes
4. parentheses

a very useful tool used during development and debugging for printing content to the debugger is:
1. JavaScript
2. terminal/bash
3. for loops
4. console.log

All done! Final Score, etc
*/

