function updateDisplay(value) {
  document.getElementById("display").value += value;
}

function clear_entry(value) {
  document.getElementById("display").value = "";
  document.getElementById("solutionDisplay").value = "";
}
function clearLast(value) {
  let displayValue = document.getElementById("display").value;
  document.getElementById("display").value = displayValue.slice(0, -1);
}
function calculate_percentage(value) {
  let displayValue = document.getElementById("display").value;
  if (displayValue !== "") {
    let percentageValue = parseFloat(displayValue) * 0.01;
    let solutionDisplay = document.getElementById("solutionDisplay");
    solutionDisplay.value +=
      displayValue + "% = " + percentageValue.toFixed(2) + "\n";
    document.getElementById("display").value;
  } else {
    updateDisplay("Error");
  }
}

function squareRoot() {
  let displayElement = document.getElementById("display");
  let displayValue = displayElement.value;

  if (displayElement !== "") {
    let numericValue = parseFloat(displayValue);

    if (!isNaN(numericValue) && numericValue >= 0) {
      let sqrtValue = Math.sqrt(numericValue);
      let solutionDisplay = document.getElementById("solutionDisplay");
      solutionDisplay.value +=
        "√(" + displayValue + ") = " + sqrtValue.toFixed(2) + "\n";
      updateDisplay(sqrtValue.toFixed(2));
      document.getElementById("display").value = "";
    } else {
      updateDisplay("Error");
    }
  } else {
    updateDisplay("Error");
  }
}

function calculate() {
  var equation = document.getElementById("display").value;
  try {
    var solution = eval(equation);
    document.getElementById("solutionDisplay").value = solution;
  } catch (error) {
    document.getElementById("solutionDisplay").value = "Error";
  }
}
