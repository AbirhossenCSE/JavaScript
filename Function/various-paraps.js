function evenSizeString(str){
    const size = str.length;
    console.log(str, size);

    if (size % 2 === 0) {
        console.log('Even size');
        
    } else {
        console.log('Odd size');
        
    }
    
}

evenSizeString('Dahka');
evenSizeString('Faka')


function doubleOrTriple(number, doDouble){
    if (doDouble === true) {
        const result = number *2;
        return result;
    } else {
        
    }
}