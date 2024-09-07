// Object
const bottle = {
    brand : 'apple',
    price: 45,
    color: 'red',
    isClean: false
}

const subject = {
    name: 'Biology',
    teacher: 'Jefrin mam',
    examDate: '30 feb',
    chapter: ['first', 'second', 'third'],
    exam: {
        name: 'Final exam',
        marks: 100
    }
}



const person = {
    name: 'rajib ahmed',
    age: 13,
    proffession: 'Terorist',
    salary: 10000000,
    married: false,
    'fav place': ['doulodia', 'sonagaji']
}
console.log(person);

// dot natation
console.log(person.age);

const income = person.salary;
console.log(income);

// backet natation
console.log(person['married']);

console.log(person['fav place']);




