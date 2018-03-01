var numSquares = 6;
// declare array
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  // mode buttons event listeners
  setupModeButtons();
  // square event listeners
  setupSquares();
  // picks colors and changes text content etc.
  reset();
}

function setupModeButtons() {
  for(var i = 0; i <modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setupSquares() {
  for(var i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to pickedColor
      if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor); // pass in correct color
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}


function reset() {
  colors = generateRandomColors(numSquares);
  // pick new color from array
  pickedColor = pickColor();
  // change color display to match pickedColor
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  // change colors of squares
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
})


function changeColors(color) {
  // loop through all squares
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  // change each color to match given color
}


function pickColor() {
  // pick a random number
  var random = Math.floor(Math.random() * colors.length);
  // use number to access color in array and return that color
  return colors[random];
}


function generateRandomColors(num) {
  // make an array
  var arr = [];
  // repeat num times
  for(var i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  // return array
  return arr;
}


function randomColor() {
  // pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256); // rounding down bc doesn't include 1
  // pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256); // rounding down bc doesn't include 1
  // pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256); // rounding down bc doesn't include 1
  // synthesize string
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
