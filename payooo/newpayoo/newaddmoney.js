document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    // console.log(addMoney, pinNumber);

    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;
        
    } else {
        alert('Failed')
    }
    
})