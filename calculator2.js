var string = "";
var array = [];
var tempArray = [];
var tempOperator = "";
var display = document.getElementById('display');

function displayScreen(numbers) {
  string = string + numbers;
  display.value = string;
}

function answerString(key) {
    display.value = key;
    displayScreen(key);
    tempArray.push(key);
}

function addOperator(key) {
  array.push(tempArray);
  tempArray = [];
  display.value = "0";
  array.push(key);
}

function allClear() {
  string = "",
  array = [];
  tempArray = [];
  display.value = "0";
}

function clearEntry() {
  string = "",
  tempArray = [];
  display.value ="0";
}

console.log(array);
console.log(tempArray);
console.log(display.value);
