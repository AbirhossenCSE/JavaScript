document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    // console.log(addMoney, pinNumber);

    if (isNaN(addMoney) || addMoney <= 0) {
        alert('Failed');
        return;
    }

    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. Balance: ${newBalance}`;
        // should be a common function
        document.getElementById('transaction-container').appendChild(p);
        
    } else {
        alert('Failed')
    }
    
})