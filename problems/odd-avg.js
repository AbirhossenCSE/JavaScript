function oddAverage(numbers){
    const odds = [];
    for (const number of numbers){
        if (number % 2 === 1) {
            // console.log(number);
            odds.push(number);
        }
        
    }
    console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log('Sum off odd numbers :', sum, 'And Count:', count);
    const avg = sum / count;
    return avg;
    
}

const numbers = [46, 64, 63, 78, 11, 17, 55, 77];
const avg = oddAverage(numbers);
console.log('Average of odd numbers is :', avg);
