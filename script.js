// Store variables
const input = document.querySelector(".input-result");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operation");
const clear = document.querySelector(".cancel");
const back = document.querySelector(".back");
const pctg = document.querySelector(".pctg");

let firstNum = "";
let secondNum = "";
let operation = "";
let result = "";

// Store variables from clicks
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
        } else {
            operate();
        };
    });
});

// Create the operate() function
function operate() {
    switch (operation) {
        case "+":
            result = parseInt(firstNum) + parseInt(secondNum);
            break;
        case "-":
            result = parseInt(firstNum) - parseInt(secondNum);
            break;
        case "x":
            result = parseInt(firstNum) * parseInt(secondNum);
            break;
        case "/":
            result = parseInt(firstNum) / parseInt(secondNum);
            break;
        default:
            break;
    };
    input.textContent = result;
    firstNum = result;
    secondNum = "";
};