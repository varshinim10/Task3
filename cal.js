let currentInput = '';
let previousInput = '';
let operationType = '';

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}

function operation(operator) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operationType = operator;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  let result;
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  if (isNaN(num1) || isNaN(num2)) return;
  switch (operationType) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        result = 'Error';
      } else {
        result = num1 / num2;
      }
      break;
    default:
      return;
  }
  document.getElementById('display').value = result;
  currentInput = result.toString();
  previousInput = '';
  operationType = '';
}