var string = "";
var array = [];
var tempArray = [];
var display = document.getElementById('display');

function displayScreen(numbers) {
  string = string + numbers;
  display.value = string;
}

function answerString(key) {
  display.value = key;
  displayScreen(key);
  tempArray.push(key)
  return;
}

function addOperator(key) {
  if (typeof tempArray == "number") {
    array.push(key);
    tempArray = [];
    tempArray.push(key)
    string = "";
  } else if (typeof tempArray !== "number") {
    tempArray = [];
    tempArray.push(key);
    string = "";
  }
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
