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


//To add the numbers into the display
function inputDigit(digit) {
  const { waitSecond, diplay } = calculator
// If an operator has been used, waitSecond becomes false and the new digit displays
  if (waitSecond === true) {
    calculator.display = digit;
    calculator.waitSecond = false;
  }
  // Overwrite `display` if the current value is '0' otherwise append to it
    else if (calculator.display === "0") {
    calculator.display = digit;
  } else {
    calculator.display += digit;
  }
  console.log(calculator);
}

// Function where decimal point is added if there is only NO decimal points.
function addDecimal(decimal) {
  if (calculator.waitSecond === true) {
    return;
  }
  if (!calculator.display.includes(decimal)) {
    calculator.display += decimal;
  }
}

// Function to add operators to the number which should be a float
// If the button pressed is the parameter "first", then the button pressed
// will be the input. Otherwise, the function "calculate" will run and
// the formula will be run as the waitSecond becomes true.
function useOperator(nextOperator) {
let { first, display, operator, waitSecond } = calculator;
  let input = parseFloat(display);

// This statement makes it so that operators override when pressed
// consecutively.
  if (operator && waitSecond)  {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }

  if (first === null) {
    calculator.first = input;
  } else if (operator) {
    let current = first || 0;
    let result = calculate[calculator.operator](current, input);

    calculator.display = String(result);
    calculator.first = result;
  }

  calculator.waitSecond = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}

var calculate = {
  '÷': (first, second) => first / second,
  '*': (first, second) => first * second,
  '+': (first, second) => first + second,
  '-': (first, second) => first - second,
  '=': (first, second) => second
};

// Reset button for the calculator

function allClear() {
  calculator.display = "0",
  calculator.first = null,
  calculator.operator = null,
  calculator.waitSecond = false,
  console.log(calculator);
}

// Clears recent entry
function clearEntry() {
  calculator.display = "0",
  console.log(calculator);
}


// The screen will need to show the numbers - the display - default = "0".
function updateDisplay() {
  let display = document.querySelector(".display");
  display.value = calculator.display;
}

updateDisplay();

// Need to make keys register on click using an addEventListener('click',)
let keys = document.querySelector(".calc-buttons");
keys.addEventListener('click', (event) => {
  let { target } = event;
// The event(click)'s target will return based on their class.
// if click isn't a button, it will end.
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    useOperator(event.target.value);
    updateDisplay();
    return;
  }
// If button pressed is ".",
  if (target.classList.contains('decimal')) {
    addDecimal(event.target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('all-clear')) {
    allClear();
    updateDisplay();
    return;
  }

  if (target.classList.contains('clear-entry')) {
    clearEntry();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();

});
