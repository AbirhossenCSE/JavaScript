console.log(10 != 10);
console.log(10 !== '10');



const age = 20;

if (age >= 10) {
    console.log("Welcome");
    
}
else if (age >= 18) {
    console.log('Hi');
    
}
else{
    console.log('Nikal');
    
}


const salary = 25000;
const isBCS = true;
const height = 61;

if (salary > 20000 && height > 66) {
    console.log('Ok');
    
}else{
    console.log('No');
    
}

if (salary > 25000 || height > 72) {
    console.log('Kobul');
    
} else {
    console.log('Nikal');
    
}

// Multi Level Condition

const price = 3000;
if (price >= 5000) {
    // Discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
    console.log(discount);
    
}
else if (price > 2500){
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
    console.log(discount);
    
    
}
else{
    console.log(price);
    
}

const age = 62;
const price = 500;
if (age <= 12) {
    console.log('Free');
    
}
else if (age >= 60) {
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
    
}
else{
    console.log(price);
    
}