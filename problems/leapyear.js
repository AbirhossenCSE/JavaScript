function isLeapYear(year){
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    } 
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else {
       return false; 
    }
}

const sal = isLeapYear(2000);
console.log(sal);
