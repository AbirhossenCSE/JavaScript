const numbers = [45, 56, 54, 52, 26]

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
       
// }

// for (const Number of numbers){
//     console.log(Number);
    
// }


const products = [
    {id: 1, name: 'xaumi phone one night', price: 27000},
    {id: 2, name: 'redmi', price: 27000},
    {id: 3, name: 'iphone', price: 27000},
    {id: 4, name: 'mac book air', price: 27000},
    {id: 5, name: 'Dell inspiron laptop', price: 27000},
    {id: 6, name: 'redmi note 23', price: 27000},
    {id: 7, name: 'samsung note 7', price: 27000},
    {id: 8, name: 'nokia old age phone', price: 27000},
    {id: 9, name: 'phone one', price: 27000},
]

// for(const product of products){
//     console.log(product);
    
// }

function machedProducts (products, search){
    const mached = [];
    for(const product of products){
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
           mached.push(product);
        }   
    }
    return mached;
}

const result = machedProducts(products, 'phone');
console.log(result);
