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

function performOperations(expression) {
    // Parsing the expression to extract numbers and operators
    const parts = expression.split(/([+\-*/])/).map(part => part.trim());

    let result = parseFloat(parts[0]);

    for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i];
        const num = parseFloat(parts[i + 1]);

        switch (operator) {
            case '+':
                result += num;
                break;
            case '-':
                result -= num;
                break;
            case '*':
                result *= num;
                break;
            case '/':
                if (num === 0) {
                    console.log("Division by zero is undefined. Skipping this operation.");
                    break;
                }
                result /= num;
                break;
            default:
                return "Invalid operator";
        }
    }

    return result;
}

console.log(performOperations("2 + 5 * 8 / 3")); // Output: 18.666666666666668










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


document.querySelectorAll('.calc-button').forEach(button => {
    button.addEventListener('click', function() {
        const display = document.getElementById('display');
        const value = this.textContent;

        if (value === '=') {
            // Perform calculation
            display.textContent = performOperations(display.textContent).toString();
        } else if (value === 'C') {
            // Clear display
            display.textContent = '';
        } else {
            // Append number/operator to display
            display.textContent += value;
        }
    });
});


    
});
















