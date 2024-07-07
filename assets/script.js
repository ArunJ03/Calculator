let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(operator) {
    currentInput += operator;
    display.innerText = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch (e) {
        display.innerText = 'Error';
    }
}
