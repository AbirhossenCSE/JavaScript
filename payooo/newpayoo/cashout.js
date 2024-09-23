document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');
    // console.log(addMoney, pinNumber);

    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - addMoney;

        document.getElementById('account-balance').innerText = newBalance;
        
    } else {
        alert('Failed')
    }
    
})