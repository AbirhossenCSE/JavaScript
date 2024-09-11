const price = [20000, 30000, 25000, 32000, 21000];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const cheap = getMin(price);
console.log('Minimum price is: ', cheap);
