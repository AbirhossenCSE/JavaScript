function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
        
    }
    return sum;
    
}

const nums = [54, 64, 46, 46];
const sum = sumOfNumbers(nums);
console.log('Sum of numbers :', sum);
