console.log('saperate js file');


// Option 2: add onclick function [Importent]
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// Option 3: add onclick function
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// Option 3: another [Used sometimes]
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// Option 4: 
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)
function makePink(){
    document.body.style.backgroundColor = 'pink';
 }

//  Option 4: Another
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})

// Option 4: Final
// Importent
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})