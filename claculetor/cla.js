const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value[display.value.length - 1];
    if (!['+', '-', '*', '/','%'].includes(lastChar)) {
        display.value += operator;
    }
}

function appendDecimal() {
    const parts = display.value.split(/[\+\-\*\/\%]/);
    const lastPart = parts[parts.length - 1];
    if (!lastPart.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}