// // const friends = ['elon', 'bill', 'mark', 'waren'];

// // for(const friend of friends){
// //     console.log(friend);
    
// // }

// // for (let i = 0; i < friends.length; i++) {
// //     console.log(i);
// //     console.log(friends[i]);  
    
// // }




// // Reverce
// const numbers = [1, 15, 46, 97, 45, 87, 46,]
// // console.log(numbers);

// // numbers.reverse();
// // console.log(numbers);

// // const rev_num = [];
// // for(const num of numbers){
// //     console.log(num);
// //     rev_num.unshift(num);
    
// // }
// // console.log(rev_num);

const reversed_numbers = [];
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    reversed_numbers.unshift(num)
    
}

// reverce side
for(let i = numbers.length -1 ; i >=0; i--){
    const num = numbers[i];
    console.log(num);
    
}
