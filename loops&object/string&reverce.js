const country = 'Bangladesh';
const division = "Khulna";
const district = `Kushtia`;
const thana = new String('Daulotpur');

console.log(typeof country);
console.log(typeof division);
console.log(typeof district);
console.log(typeof thana);

const num = [54, 23, 35, 75, 93];
console.log(num);

num[1] = 11;
console.log(num);

const capital = 'Dhaka';
console.log(capital);
console.log(capital.length);
console.log(capital[1]);


const school = 'DAFFODIN INTERNATIONAL UNIVERSITY'
console.log(school);
console.log(school.toLowerCase());




const subject = 'Chemistry';
const book = 'chemistry';

if (subject.toLowerCase() === book.toLowerCase()) {
    console.log('I am reading');
    
}
else{
    console.log('I am not reading');
    
}

const drink = ' water';
const liquid = '  water  ';

if (drink.trim === liquid.trim) {
    console.log('Pani e sob');
} else {
    console.log('Sob pani valo na');
    
}




// Slice & Split
const address = 'andorkilla';
const part = address.slice(2, 5);
console.log(part);

const sentence = 'I am good and hardworking person';
console.log(sentence.split());
console.log(sentence.split(''));
console.log(sentence.split(' '));


const friendstr = 'raisul,sajib,rajib,anik';
const friend = friendstr.split(',');
console.log(friend);

const realfriend = [ 'raisul', 'sajib', 'rajib', 'anik' ];
console.log(realfriend.join());


const first = 'Abir';
const last = 'hossen';

const fullname = first + ' ' + last;
console.log(fullname);
const fullname2 = first.concat(' ').concat(last);
console.log(fullname2);





Revarce
const sentence2 = 'I am learning web dev';

let revarce = ''
for(const letter of sentence2){
    // console.log(letter);
    revarce = letter + revarce;
}
console.log(revarce);


let rev = ''
for (let i = 0; i < sentence2.length; i++) {
    // console.log(i);
    // console.log(sentence2[i]);
    
    const letter = sentence2[i];
    rev = letter + rev;
    // console.log(rev);   
}
console.log(rev);


const revarced = sentence2.split('').reverse().join('');
console.log(revarced);

















