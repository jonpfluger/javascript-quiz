var highscore = 0;
var body = document.body;
var myH1 = document.getElementById("myh1");
var mySection = document.getElementById("mysection")
var myP = document.getElementById("myp");
var myButton = document.getElementById("mybutton");
var startButton = document.getElementById("startButton");
var myFooter = document.getElementById("myfooter");
var footerH4 = document.getElementById("footerh4");


// starts the first question
startButton.addEventListener("click", function() {
    console.log("test");
    var favoriteEl = document.createElement("div");
    var listEl = document.createElement("ol");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    listEl.textContent = "The condition in an if / else statement is enclosed within ____.";
    li1.textContent = "quotes";
    li2.textContent = "curly brackets";
    li3.textContent = "parentheses";
    li4.textContent = "square brackets";

    mySection.removeChild(myP);
    myButton.removeChild(startButton);
    myFooter.removeChild(footerH4);

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
});




// myH1.style.color = 'pink';
// myH1.setAttribute("id", "my-heading");
// myH1.setAttribute("style", "color: blue; font-size: 30px");
// console.log(a.getAttribute("href"));
// window.addEventListener("mouseover", function() {
    // code block
// })



/*
commonly used data types do NOT include:
1. strings
2. booleans
3. alerts
4. numbers

the condition in an if / else statement is enclosed within ____.
1. quotes
2. curly brackets
3. parentheses
4. square brackets

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

