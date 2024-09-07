const number = 7;
if (number < 1) {
    console.log('Coto ekta number paici');
    
}
console.log('Something new is cooking');



let num = 0;
while (num < 5) {
    console.log('Abir', num);
    // num = num + 1;
    // num += 1;
    num++;
    
}


let son = 0;
while (son < 10) {
    console.log(son);
    son++;
    
}

let num2 = 1;
let sum = 0;

while (num2 <= 10) {
    console.log(num2);
    sum = sum + num2;
    console.log('Sum :', sum);
    
    num2++;
    
}



// Even number
let num3 = 1;
while (num3 <= 10) {
    console.log(num3);
    num3++;
    if (num3 % 2 === 0) {
        console.log('Even Number', num3);
        
    }
    
}



for (let i = 0; i < 10; i++) {
    console.log(i);
    
    
}

// even
for (let i = 0; i < 20; i=i+2) {
    console.log(i);
    
    
}

// odd
for (let i = 1; i < 20; i=i+2) {
    console.log(i);
    
    
}


let sum2 = 0;

for (let i = 11; i < 20; i++) {
    sum2 = sum2 + i;
    console.log(i);
    
}
console.log('Sum :', sum2);




// decriment
for (let i = 10; i > 0; i--) {
    console.log(i);
    
    
}