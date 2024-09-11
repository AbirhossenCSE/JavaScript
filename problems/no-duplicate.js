const birianiKhor = ['abul', 'babul', 'abul', 'kabul', 'babul', 'cabul', 'kabul'];
const numbers = [46, 64, 46, 46, 54, 85];
function noDuplicate(array) {
    unique = [];
    for (const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(birianiKhor);
console.log(uniqueArray);
