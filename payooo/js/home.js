// step-1:
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload
    event.preventDefault();

    // step-2: get money
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // step-3: verify pin
    if (pinNumberInput === '1234') {
        console.log('Add money to the account');

        // Step-4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(typeof balance);

        // step-5: add money with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // step-6: update the balance in display
        document.getElementById('account-balance').innerText = newBalance;
        
        
    }
    else{
        alert('Failed to add money! Try again');
    }

    
    
});