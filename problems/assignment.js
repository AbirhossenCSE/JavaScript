function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
        return 'Invalid Input';
    }
    
    const profit = income - expenses;
    const tax = profit * 0.2;

    return tax;
}




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

