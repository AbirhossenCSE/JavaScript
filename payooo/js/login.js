
// S-1: Event handler
document.getElementById('button-login').addEventListener('click', function(event){
    // S-2: Prevent defolt behavior
    event.preventDefault();
    console.log('Login button clicked');

    // S-2: get the phone number & pin numbre
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log('Pin', pinNumber);
    console.log(phoneNumber);
    
    // Validate phone number and Pin But this is not  right way
    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log('Loged in');
        window.location.href = '/home.html'
        
    } else {
        alert('Number or Pin Invalid');
        
    }
})
