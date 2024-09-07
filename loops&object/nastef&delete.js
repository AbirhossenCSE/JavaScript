const collage = {
    name: 'VNC',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            pos: 'top'
        }
    }
}


console.log(collage.name);
console.log(collage.unique);
console.log(collage.unique.color);
console.log(collage.unique.result.gpa);

console.log('Events', collage.events[2]);

// delete
delete collage.class;

collage.unique.result.gpa = '4.5';
console.log(collage.unique.result.gpa);