const phones = [
    { name: 'samsung', price: 20000, camera: '12mp', color: 'black'},
    { name: 'xaomi', price: 26000, camera: '12mp', color: 'black'}, 
    { name: 'oppo', price: 25000, camera: '12mp', color: 'black'}, 
    { name: 'Iphone', price: 200000, camera: '12mp', color: 'black'}, 
    { name: 'walton', price: 18000, camera: '12mp', color: 'black'}, 
    { name: 'HTC', price: 27000, camera: '12mp', color: 'black'} 
]

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if (phone.price < min.price) {
            min = phone;
        }
        
    }
    return min;
}

const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is :', cheap);
