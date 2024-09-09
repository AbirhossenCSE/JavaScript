function tenTimes(number) {
    const result = number * 10;
    return result;
}

const output = tenTimes(5);
console.log('Output: ', output);


function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}
const result = doMath(20, 10);
console.log(result);




// conditional return
function isEven(number){
    if (number % 2 === 0) {
        return true;
    }
    else{
        return false;
    }
}

const even = isEven(5);
console.log(even);
console.log(isEven(110));



