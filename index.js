let firstnumberInput = document.getElementById("first-number");
let secondnumberInput = document.getElementById("second-number");
let addBtn = document.getElementById("add");
let subtractBtn = document.getElementById("subtract");
let multiplyBtn = document.getElementById("multiply");
let divideBtn = document.getElementById("divide");

let result = document.getElementById("result");

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

function add() {
  let firstnumber = parseFloat(firstnumberInput.value);
  let secondnumber = parseFloat(secondnumberInput.value);
  result.innerHTML = firstnumber + secondnumber;
}

function subtract() {
  let firstnumber = parseFloat(firstnumberInput.value);
  let secondnumber = parseFloat(secondnumberInput.value);
  result.innerHTML = firstnumber - secondnumber;
}
function multiply() {
  let firstnumber = parseFloat(firstnumberInput.value);
  let secondnumber = parseFloat(secondnumberInput.value);
  result.innerHTML = firstnumber * secondnumber;
}
function divide() {
  let firstnumber = parseFloat(firstnumberInput.value);
  let secondnumber = parseFloat(secondnumberInput.value);
  result.innerHTML = firstnumber / secondnumber;
}
