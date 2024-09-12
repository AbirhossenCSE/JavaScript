// const products = [
//     { name: 'shampo', price: 300},
//     { name: 'Cironi', price: 100},
//     { name: 'shirt', price: 700},
//     { name: 'pant', price: 1200}
// ];

// function getShopingTotal (product){
//     let total = 0;
//     for (const product of products){
//         total = total + product.price;
        
//     }
//     return total;
// }

// const total = getShopingTotal(products);
// console.log('Total price: ', total);


const products = [
    { name: 'shampo', price: 300, quantity: 2 },
    { name: 'Cironi', price: 100, quantity: 3 },
    { name: 'shirt', price: 700, quantity: 5 },
    { name: 'pant', price: 1200, quantity: 1 }
];


function cardTotal (products){
    let total = 0;
    for (const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
        
    }
    return total;
}

const totalShopingCost = cardTotal(products);
console.log(totalShopingCost);
