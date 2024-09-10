function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

const abirHieght = inchToFeet(70);
console.log(abirHieght);


// Inch to feet
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction)
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' +inchRemaining + ' inch ';
    return result;
}

const abirHieght2 = inchToFeet2(70);
console.log(abirHieght2);



// Mile to Kilometer
function mileToKilometer (mile){
    const kilo = mile * 1.6;
    return kilo;
}

const rasta = mileToKilometer(10);
console.log(rasta);
