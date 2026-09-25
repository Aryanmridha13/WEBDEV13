// // if else 

//     let age = 23

//     if(age>=18){
//         console.log('Eligible for vote ');
        
//     }
//     else{
//         console.log('not eligible for vote');
        
//     }


//     // if else if 
// const prompt = require("prompt-sync")({sigint:true})

// let  a = prompt('Enter a number :')
// let num = +prompt("enter the number : ")
// console.log(num,typeof(num));


//  let a = 'hello'

//  if (typeof(a) ==='string'){
//          console.log("it is not a number");
            
// }

// else if(a>0){
//     console.log('number is positive');
        
// }
// else if (a <0){
//     console.log('number is negitive');
        
// }
// else{
//     console.log('number is zero');
        
// }
// prompt instation command
//npm i prompt-sync  
// require('prompt-sync',{sigint:true})


// Assigment 

// assigmets
//  wajs to check wather the number is even or odd
// wajs to check wather a number is divisible by 5 and 10
// wajs to find the gratest among the three number 
// wajs to check wather the number is postivie even , positive odd 
// wajs to calculate a shooping discount based on the parches amount 
// wajs to check wather the givin number is single digit ,two digit or three digit 


// 1. Even or Odd

let num = 10;

if (num % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// 2. Divisible by 5 and 10

let n = 50;

if (n % 5 == 0 && n % 10 == 0) {
    console.log("Divisible by 5 and 10");
} else {
    console.log("Not divisible by 5 and 10");
}


// 3. Greatest among three numbers

let a = 10;
let b = 25;
let c = 15;

if (a > b && a > c) {
    console.log("A is greatest");
} else if (b > a && b > c) {
    console.log("B is greatest");
} else {
    console.log("C is greatest");
}


// 4. Positive Even or Positive Odd

let x = 8;

if (x > 0 && x % 2 == 0) {
    console.log("Positive Even");
} else if (x > 0 && x % 2 != 0) {
    console.log("Positive Odd");
} else {
    console.log("Not a positive number");
}


// 5. Shopping Discount

let amount = 4000;
let discount;

if (amount >= 5000) {
    discount = amount * 20 / 100;
} else if (amount >= 3000) {
    discount = amount * 15 / 100;
} else if (amount >= 1000) {
    discount = amount * 10 / 100;
} else {
    discount = 0;
}

console.log("Discount =", discount);
console.log("Final Amount =", amount - discount);


// 6. Single, Two or Three Digit

let number = 125;

if (number >= 0 && number <= 9) {
    console.log("Single Digit");
} else if (number >= 10 && number <= 99) {
    console.log("Two Digit");
} else if (number >= 100 && number <= 999) {
    console.log("Three Digit");
} else {
    console.log("More than Three Digits");
}

