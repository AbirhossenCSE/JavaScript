
// S-1: Event handler
document.getElementById('button-login').addEventListener('click', function(event){
    // S-2: Prevent defolt behavior
    event.preventDefault();
    console.log('Login button clicked');

    // S-2: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
    
    
})