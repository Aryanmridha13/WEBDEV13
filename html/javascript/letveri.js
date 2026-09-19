// LET VARIABLE

let a = 10

console.log(a);

// Declaration

let b
console.log(b);


// intilazation

let c = 'pyspider'
console.log(c);



// re-declaration & re-declaration

// let b = 20   re-declaration is nor possible in let

console.log(b);
// re-initilization is possible in let
c='qspider'


let d = 'jspider'
{
    console.log(d);
    
}
//  declare a let variable inside the block and accesing outside the block is not possible 

// {
//     let e = 'json'
// }
// console.log(e);

// declare outside the let variable and accesinig the variable inside the function is posssible

let f = 'pyspider'
function nwe(){
console.log(f);

}
nwe()


//  declare a let variable inside the function and accesing outside the block is not possible 

// function nwe1(){
//     let g = 'newspider'
// }
// console.log(g);
// console.log(g);
// console.log(g);
// console.log(g);
// console.log(g);
// console.log(g);
