const student = {
    mane: 'Abir Hossen',
    id: 121,
    address: 'Mirpur, Dhaka',
    issSingle: true,
    firends: ['Sajib', 'raisul', 'Sajol'],
    movie: [{name: 'no-1', year: 2015}, {name: 'king khan', year: 2016}],
    act: function(){
        console.log('Acting kike sakib khan');
        
    },

    car: {
        brand: 'tesla',
        price: 50000000,
        maade: 2025,
        menufacture: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}
console.log(student);
console.log(student.firends);
console.log(student.car);
console.log(student.car.menufacture);

console.log(student.act);
student.act()


// // Arguments
function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments[3]);
    
    
}
add(2, 22, 23, 84)




