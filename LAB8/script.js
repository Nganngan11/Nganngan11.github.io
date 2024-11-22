function calculate(operator) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
        if (num1 === '' || num2 === '') {
        alert('Both inputs must be filled!');
        return;
    }
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
        if (isNaN(number1) || isNaN(number2)) {
        alert('Please enter valid numbers!');
        return;
    }
        if (operator === '/' && number2 === 0) {
        alert('Cannot divide by zero!');
        return;
    }
    let result;
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
    }
        document.getElementById('result').textContent = `Result: ${result}`;
}