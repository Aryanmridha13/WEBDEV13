// IIFE semiclone is manditary (;) after one iife function 

(()=>{
    console.log("THIS IS IIFE FUNCTION");
    
}) () ;

((a,b)=>{
   console.log(a + b);
   
}) (10,2) ;

let a=10
let b= 20

console.log(a + b); 


// assigmet what is call back function and higer order function
// diffrence between higer order function or call back function with one one example 


function display1(){
    console.log("monday");
    
}

function display2(){
    console.log("sunday");
    
}

function display3(){
    console.log('get lost');
    
}

display1(display3()) // here innermost function will be executed first then the outer most 
// innermost function called as call back function
// outer most function is called as higher order function
display2()

console.log(' ');

display1(display2(display3()))