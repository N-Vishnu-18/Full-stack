// js-assignment-12-2.js
document.addEventListener('DOMContentLoaded', () => {
    // Selecting the necessary elements
    let number1Input = document.getElementById('number1');
    let number2Input = document.getElementById('number2');
    let addButton = document.querySelector('.addition');
    let subtractButton = document.querySelector('.subtraction');
    let multiplyButton = document.querySelector('.multiplication');
    let divideButton = document.querySelector('.division');
    let resultDisplay = document.querySelector('.result');

    // Adding event listeners for each operation
    addButton.addEventListener('click', () => {
        num1 = Number(number1Input.value);
        num2 = Number(number2Input.value);

        resultDisplay.textContent = 'Result: ' + (num1 + num2);
    });

    subtractButton.addEventListener('click', () => {
        num1 = Number(number1Input.value);
        num2 = Number(number2Input.value);

        resultDisplay.textContent = 'Result: ' + (num1 - num2);
    });

    multiplyButton.addEventListener('click', () => {
        num1 = Number(number1Input.value);
        num2 = Number(number2Input.value);

        resultDisplay.textContent = 'Result: ' + (num1 * num2);
    });

    divideButton.addEventListener('click', () => {
        num1 = Number(number1Input.value);
        num2 = Number(number2Input.value);

        if (num2 !== 0) {
            resultDisplay.textContent = 'Result: ' + (num1 / num2);
        } else {
            resultDisplay.textContent = "Cannot divide by zero";
            resultDisplay.style.color = 'red';
        }
    });
});
