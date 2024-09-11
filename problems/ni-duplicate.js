const birianiKhor = ['abul', 'babul', 'abul', 'kabul', 'babul', 'cabul', 'kabul'];

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
