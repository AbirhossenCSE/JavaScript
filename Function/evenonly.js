function evenNumberOnly(numbers){
    let evens = [];
    for(const number of numbers){
        if (number % 2 === 0){
            console.log(number);
            evens.push(number);
            
        }
        
    }
    return evens;
}

const numbers = [46, 46, 65, 78];
const evens = evenNumberOnly(numbers);
console.log('Even numbers are :', evens);

function sumOfEvebNumbers(numbers) {
    let sum = 0;
    for(const number of numbers){
        if (number % 2 === 0){
            console.log(number);
            sum = sum + number;
            
        }
    }
    return sum;
}

const sum = sumOfEvebNumbers(numbers);
console.log('Sum of even number is', sum);


