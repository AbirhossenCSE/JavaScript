document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');
    // console.log(addMoney, pinNumber);

    if (isNaN(cashOut) || cashOut <= 0) {
        alert('Failed');
        return;
    }

    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');

        if (cashOut > balance) {
            alert('Tk nai');
            return;
        }
        const newBalance = balance - cashOut;

        document.getElementById('account-balance').innerText = newBalance;

        // added to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</div>
            <p>${cashOut} withdrow. New Balance ${newBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div);

    } else {
        alert('Failed')
    }
    
})