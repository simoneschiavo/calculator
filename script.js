// Store variables
const input = document.querySelector(".input-result");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operation");
const clear = document.querySelector(".cancel");
const back = document.querySelector(".back");
const pctg = document.querySelector(".pctg");
const calculations = document.querySelectorAll(".calculation");
const dot = document.querySelector(".dot");

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
        };

        input.textContent += e.target.innerText;
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", e => {
        if (e.target.innerText !== "=") {
            operation = e.target.innerText;
            input.textContent += e.target.innerText;
            disableCalculations();
            enableDot();
        } else {
            operate();
            enableCalculations();
            enableDot();
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

// Create the operate() function
function operate() {
    switch (operation) {
        case "+":
            result = Math.round((parseFloat(firstNum) + parseFloat(secondNum)) * 100) / 100;
            break;
        case "-":
            result = Math.round((parseFloat(firstNum) - parseFloat(secondNum)) * 100) / 100;
            break;
        case "x":
            result = Math.round((parseFloat(firstNum) * parseFloat(secondNum)) * 100) / 100;
            break;
        case "/":
            result = Math.round((parseFloat(firstNum) / parseFloat(secondNum)) * 100) / 100;
            break;
        default:
            break;
    };
    input.textContent = result;
    firstNum = result;
    secondNum = "";
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
}