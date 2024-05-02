// Store variables
const input = document.querySelector(".input-result");
const buttons = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operation");
const clear = document.querySelector(".cancel");
const back = document.querySelector(".back");
const pctg = document.querySelector(".pctg");
const calculations = document.querySelectorAll(".calculation");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");

let firstNum = "";
let secondNum = "";
let operation = "";
let result = "";

// Act on clicks
numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operation === "") {
            firstNum += e.target.innerText;
        } else {
            secondNum += e.target.innerText;
            enableCalculations();
            enableEqual();
        };

        input.textContent += e.target.innerText;
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", e => {
        if (e.target.innerText !== "=") {
            if (operation === "") {
                operation = e.target.innerText;
                input.textContent += e.target.innerText;
                enableDot();
                enableNumbers();
            } else {
                operate();
                enableDot();
                operation = e.target.innerText;
                input.textContent += e.target.innerText;
            };
            disableCalculations();
            disableEqual();
        } else {
            operate();
            enableCalculations();
            disableNumbers();
        };
    });
});

clear.addEventListener("click", clearCalculator);

dot.addEventListener("click", e => {
    if (operation === "") {
        firstNum += e.target.innerText;
    } else {
        secondNum += e.target.innerText;
    };

    input.textContent += e.target.innerText;
    disableDot();
});

back.addEventListener("click", undo);
       
// Create the operate() function
function operate() {
    switch (operation) {
      case "+":
        result =
          Math.round((parseFloat(firstNum) + parseFloat(secondNum)) * 100) /
          100;
        break;
      case "-":
        result =
          Math.round((parseFloat(firstNum) - parseFloat(secondNum)) * 100) /
          100;
        break;
      case "x":
        result =
          Math.round(parseFloat(firstNum) * parseFloat(secondNum) * 100) / 100;
        break;
      case "/":
        result =
          Math.round((parseFloat(firstNum) / parseFloat(secondNum)) * 100) /
          100;
        break;
      default:
        break;
    };
    input.textContent = result;
    firstNum = result;
    secondNum = "";
    operation = "";
};

// Create the clearCalculator() function
function clearCalculator() {
    firstNum = "";
    secondNum = "";
    operation = "";
    result = "";
    input.textContent = result;
}

// Disable and enable calculations
function disableCalculations() {
    calculations.forEach(calculation => {
        calculation.disabled = true;
    });
};

function enableCalculations() {
    calculations.forEach(calculation => {
        calculation.disabled = false;
    });
};

// Disable and Enable dot
function disableDot() {
        dot.disabled = true;
};

function enableDot() {
    dot.disabled = false;
};

// Disable and enable equal
function disableEqual() {
    equal.disabled = true;
};

function enableEqual() {
    equal.disabled = false;
};

// Disable and enable numbers
function disableNumbers() {
    numbers.forEach(number => {
        number.disabled = true;
    });
};

function enableNumbers() {
    numbers.forEach(number => {
        number.disabled = false;
    });
};

// Add undo functionality
function undo() {
    input.textContent = input.textContent.slice(0, -1);
    if (secondNum !== "") {
        secondNum = secondNum.slice(0, -1);
    } else if (operation !== "") {
        operation = "";
        enableCalculations();
    } else {
        firstNum = firstNum.slice(0, -1);
    };
};

// Add keyboard support functionality
document.addEventListener("keydown", e => {
    if (isFinite(e.key)) {
        if (operation === "") {
            firstNum += e.key;
        } else {
            secondNum += e.key;
            enableCalculations();
            enableEqual();
        };

        input.textContent += e.key;
    };

    if (e.key === "/" || e.key === "*" || e.key === "-" || e.key === "+" || e.key === "Enter" || e.key === "=") {
        if (e.key !== "=" && e.key !== "Enter") {
            if (operation === "") {
                operation = e.key;
                input.textContent += e.key;
                enableDot();
                enableNumbers();
            } else {
                operate();
                enableDot();
                operation = e.key;
                input.textContent += e.key;
            };
            disableCalculations();
            disableEqual();
        } else {
            operate();
            enableCalculations();
            disableNumbers();
        };
    };

    if (e.key === "Backspace") {
        undo();
    };
});