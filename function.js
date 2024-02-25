document.addEventListener('DOMContentLoaded', function() {

// Function to add multiple numbers
function addNumbers(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}

// Function to subtract multiple numbers from the first one
function subtractNumbers(...numbers) {
    return numbers.reduce((acc, current, index) => index === 0 ? current : acc - current);
}

// Function to multiply multiple numbers
function multiplyNumbers(...numbers) {
    return numbers.reduce((acc, current) => acc * current, 1);
}

// Function to divide the first number by all the subsequent numbers sequentially
function divideNumbers(...numbers) {
    return numbers.reduce((acc, current, index) => {
        if (index === 0) {
            return current;
        } else {
            if (current === 0) { // Handling division by zero by returning null for that operation
                console.log("Division by zero is undefined. Skipping this operation.");
                return acc;
            }
            return acc / current;
        }
    });
}


let firstNumber = ''
let operator = ''
let secondNumber = ''


function operate(num1, operator, num2) {
    switch(operator) {
        case '+':
            return addNumbers(num1, num2);
        case '-':
            return subtractNumbers(num1, num2);
        case '*':
            return multiplyNumbers(num1, num2);
        case '/':
            return divideNumbers(num1, num2);
        default:
            return "Invalid operator";
    }
    
}  





const buttons = [
    { text: '1', class: 'btn-1' },
    { text: '2', class: 'btn-2' },
    { text: '3', class: 'btn-3' },
    { text: '4', class: 'btn-4' },
    { text: '5', class: 'btn-5' },
    { text: '6', class: 'btn-6' },
    { text: '7', class: 'btn-7' },
    { text: '8', class: 'btn-8' },
    { text: '9', class: 'btn-9' },
    { text: '0', class: 'btn-0' },
    { text: '+', class: 'btn-plus' },
    { text: '-', class: 'btn-minus' },
    { text: '*', class: 'btn-multiply' },
    { text: '/', class: 'btn-divide' },
    { text: '=', class: 'btn-equal' },
    { text: 'C', class: 'btn-clear' },
    { text: '.', class: 'btn-dot' },
    { text: '+/-', class: 'btn-negate' },
    // Add more buttons as needed
];

const btnContainer = document.getElementById('btnContainer');

buttons.forEach(button => {
    const div = document.createElement('div');
    div.textContent = button.text;
    div.className = `calc-button ${button.class}`;
    btnContainer.appendChild(div);
});























});
















