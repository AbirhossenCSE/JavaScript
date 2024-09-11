const today = new Date();
console.log(today.toLocaleString('eb-GB'));
const date = new Date ('2026-10-25');
console.log(date.getMonth());
console.log(date.getDay());

const specicDate = new Date(2091, 0, 26);
console.log(specicDate);
specicDate.setMonth(10);
console.log(specicDate.toLocaleString('en-GB'));



