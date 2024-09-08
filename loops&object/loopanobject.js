const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'white',
    camera: '12mp',
    isNew: true
}

// for off : array
// for in : object


// for (const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
    
// }

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, ':', mobile[key]);
    
}

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
    console.log(i);
 }, 100);
}