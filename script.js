let clear = document.querySelector("#clear");
let equals = document.querySelector("#equals");

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

let lastOperation = document.querySelector(".prevOperation");
let currentOperation = document.querySelector(".currentOperation");

let lastNum = "";
let currentNum = "";
let operator = "";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
}

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    currentOperation.textContent += this.textContent;
    currentNum = currentOperation.textContent;
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    if (currentOperation != "") {
      if (lastOperation.textContent == "") {
        operator = this.textContent;
        lastNum = currentNum;
        lastOperation.textContent = `${currentOperation.textContent} ${operator}`;
        currentNum = "";
        currentOperation.textContent = "";
      } else if (lastOperation.textContent != "") {
        let result = operate(parseFloat(lastNum), parseFloat(currentNum));
        operator = this.textContent;
        lastNum = result;
        lastOperation.textContent = `${result} ${operator}`;
        currentNum = "";
        currentOperation.textContent = "";
      }
    }
  });
}

equals.addEventListener("click", function () {
  if (lastOperation.textContent != "" && currentOperation.textContent != "") {
    let result = operate(parseFloat(lastNum), parseFloat(currentNum));
    lastOperation.textContent = "";
    currentNum = result;
    currentOperation.textContent = result;
  }
});

clear.addEventListener("click", function () {
  lastNum = "";
  currentNum = "";
  operator = "";
  lastOperation.textContent = "";
  currentOperation.textContent = "";
});
