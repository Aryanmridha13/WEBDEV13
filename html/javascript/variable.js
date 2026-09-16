// var

var a = 10

// declaration

var b 
console.log(b);


// intilazation

var c ='pyspiders'
console.log(c);


// re-declaration & re-intilazation

var b = 20

console.log(b);

c= 'qspider'

console.log(c);



// Accessibilities
// Block & func
// if im initi a variable using var outside the block can i access the same variable inside the block
// it is possible

var place = 'Bengalore'
{
    console.log(place);
    
}

// if im initi a variable using var inside the block can i access the same variable inside the block
// it is possible

{
var place4 = 'Bengalore'

}
console.log(place4);

// if im initi a variable using var outside the function can i access the same variable inside the block
// it is possible

var place3 = 'Bengalore'
function show(){
    console.log(place3);
    
}
show()

// if im initi a variable using var inside the function can i access the same variable inside the block
// it is not possible

function show1(){
var place1 = 'Bengalore'

}
console.log(place1);
