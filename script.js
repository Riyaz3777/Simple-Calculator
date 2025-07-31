let display = document.getElementById("display");

function appendSymbol(symbol) {
  display.value += symbol;
}

function allClear() {
  display.value = "";
}

function clearLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Evaluate the expression using Function constructor for safety
    let result = new Function("return " + display.value)();
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}
