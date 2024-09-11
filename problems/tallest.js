const height = [12, 64, 78, 65, 45, 36, 64];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){ 
        if (num > max) {
            max = num;
        }
    }
    return max;
    
}
const max = getMax(height);
console.log('max value is', max);
