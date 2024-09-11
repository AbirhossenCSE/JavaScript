const disha = 80;
const salman = 85;

if (disha > salman) {
    console.log('Dihsa will eat the banana');
    
}
else{
    console.log('salman will get the strobary');
    
}

// Inside a function
function getMax(num1, num2){
    if (num1 > num2) {
        return num1;
    }
    else{
        return num2;
    }
}
const max = getMax(45, 56);
const max2 = getMax(54, 87);
const ultimateMax = getMax(max, max2)
console.log('Max of two number is', ultimateMax);


// 3 number max
const jim = 56;
const tim = 88;
const kim = 66;

if (jim > kim && jim > tim) {
    console.log('Jim kis the boss');
    
}
else if (tim > jim && tim > kim) {
    console.log('Tim is the boss');
    
}
else{
    console.log("kim is kardashian");
    
}

// function
function maxNum3(numb1, numb2, numb3){
    if (numb1 > numb2 && numb1 > numb3) {
        return numb1;
    }
    else if (numb2 > numb1 && numb2 > numb3) {
        return numb2;
    }
    else{
        return numb3;
    }
}

const max3 = maxNum3(85, 78, 95)
console.log(max3);


const max4 = Math.max(46, 46, 56, 46, 85, 69, 32);
console.log('max is using Math.max :', max4);
