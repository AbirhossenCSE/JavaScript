function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please give a number'
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(6, 8);
console.log(result);
const result2 = multiply(6, 'seven');
console.log(result2);
const result3 = multiply(6, [7]);
console.log(result3);
