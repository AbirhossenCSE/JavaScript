// option 1
function handOnClick(){
    const handLerStatus = document.getElementById('handler-status');
    handLerStatus.innerText = 'Handled by function attribute';
    
}

// option 2
document.getElementById('event-lisenter').addEventListener('click', function(){
    const handLerStatus = document.getElementById('handler-status');
    handLerStatus.innerText = 'Text updated by addEventLisenter'
})

// option 2: Another input value 
document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputField.value = '';
})
