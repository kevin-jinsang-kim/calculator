// Create an object called Calculator
// It will have a display to show the numbers,
// It will display the first number, and operator will hold the operator.
// waitSecond will show if it can be expressed or second number is required.
let calculator = {
  display: "0",
  first: null,
  operator: null,
  waitSecond: false
}

// The screen will need to show the numbers - the display - default = "0".
function updateDisplay() {
  const display = document.querySelector(".display");
  display.value = calculator.display;
}

updateDisplay();

// Need to make keys register on click using an addEventListener('click',)
