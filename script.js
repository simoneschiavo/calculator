const keys = document.querySelectorAll("button");
const screen = document.querySelector(".input-result");

keys.forEach((key) => {
    key.addEventListener("click", e => {
            screen.textContent += e.target.innerText;
    });
});

// const updateScreen = function (e) {
//     screen.textContent += e.target.innerText;
// }

// cancel.addEventListener("click", e => {
//     console.log(e.target.innerText);
// })