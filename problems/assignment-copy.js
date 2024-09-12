// problem 1
function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
        return 'Invalid Input';
    }
    const profit = income - expenses;
    const tax = profit * 0.2;

    return tax;
}

const calculateTaxRate = calculateTax(5000, 2000);
console.log(calculateTaxRate);


// Problem 2

function sendNotification(email) {
    const atLetter = email.indexOf('@');
    if (atLetter === -1) {
        return 'Invalid Email';
    }

    const userName = email.substring(0, atLetter);
    const domainName = email.substring(atLetter + 1);

    const notification = [userName, 'sent you an email from', domainName].join(' ');
    return notification;

}

const email = "farhan34@yahoo.com";
const notification = sendNotification(email);

console.log(notification);




// problem 3

function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i])) {
            return true;
        }
        
    }
    return false;
}

let name1 = "Suman";
let name2 = "Rahim123";
let invalidInput = 123;

console.log(checkDigitsInName(name1));
console.log(checkDigitsInName(name2));
console.log(checkDigitsInName(invalidInput));


// problem 4
function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return 'Invalid Input';
    }
    if (obj.testScore >= 50 || obj.schoolGrade >= 30 || typeof obj.isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily) {
        finalScore += 20;
    }

    if (finalScore >= 80) {
        return true;
    }
    else{
        return false;
    }
}

const student1 = {
    name: 'Rajib',
    testScore: 45,
    schoolGrade: 28,
    isFFamily: true
  };
  
  const result = calculateFinalScore(student1);
  console.log(result);



// problem 5

function  waitingTime(waitingTimes  , serialNumber) {
    
    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        totalTime = totalTime + waitingTimes[i];
        
    }
    if ( !Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    const avgTime = Math.round(totalTime / waitingTimes.length);
    const remainingSerial = (serialNumber - 1) - waitingTimes.length;
    const isratWaittingTime = avgTime * remainingSerial;
    return isratWaittingTime;
}

const waitingTimes = [13, 2];
const serialNumber = 6;
console.log(waitingTime(waitingTimes, serialNumber));

