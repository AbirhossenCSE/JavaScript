document.getElementById('text-field').addEventListener('focus', function(){
    console.log('event tiggered inside the input field');
    
})
document.getElementById('text-field').addEventListener('blur', function(){
    console.log('event tiggered inside the input field blur');
    
})

document.getElementById('text-field').addEventListener('keydown', function(event){
    console.log(event.target.value);
    
})
document.getElementById('text-field').addEventListener('keypress', function(event2){
    console.log(event2.target.value);
    
})
document.getElementById('text-field').addEventListener('keyup', function(event3){
    console.log(event3.target.value);
    
})

document.getElementById('btn-more').addEventListener('mousemove', function(){
    console.log('Event triggered');
    
})