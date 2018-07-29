/**
 * Project Name: Color Game
 * Author Name: Sourav Hossain
 */

var numberOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll("div.square");
var colorDisplay = document.querySelector("span#colorDisplay");
var messageDisplay = document.querySelector("span#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("button#resetButton");
var modeButton = document.querySelectorAll("button.modeButton");

init(); // go to init function

resetButton.addEventListener("click", function () {
    reset(); // go to reset function
});

function init() {
    setupModeButtons(); // go to setupModeButtons function
    setupSquares(); // go to setupSquares function
    reset(); // go to reset function
} // end init function

function setupModeButtons() {
    for (var i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function () {
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");

            if (this.textContent === "Easy") {
                numberOfSquares = 3;
            } else {
                numberOfSquares = 6;
            }

            reset(); // go to reset function
        });
    }
} // end setupModeButtons function

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor); // go to changeColors function
                h1.style.background = clickedColor;
                messageDisplay.style.color = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
} // end setupSquares function

function reset() {
    colors = generateRandomColors(numberOfSquares); // go to generateRandomColors function
    pickedColor = pickColor(); // go to pickColor function
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    messageDisplay.style.color = "#306977";
    resetButton.textContent = "New Colors";

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

    h1.style.background = "#306977";
} // end reset function

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
} // end changeColors function

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
} // end pickColor function

function randomColor() {
    return "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
} // end randomColor function

function generateRandomColors(length) {
    var list = [];

    for (var i = 0; i < length; i++) {
        list.push(randomColor()); // go to randomColor function
    }

    return list;
} // end generateRandomColors function