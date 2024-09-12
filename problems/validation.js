function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please give a number'
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(5, 'seven');
console.log(result);
