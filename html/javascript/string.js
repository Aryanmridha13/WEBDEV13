let str = 'pyspide'
let str1 = 'BENGLORE'

// 1 toUppercase()
console.log(str.toUpperCase());

// 2 toLowercase()
console.log((str1.toLowerCase()));

// 3 length

console.log(str.length);

//4 slice()

console.log(str.slice(1,2));


//5 replace 

console.log(str1.replace('BENGLORE','PUNE'));

//6 concat()

console.log(str.concat(str1));

//7 trim()
//8 trimStart()
//9 trimEnd()
let place = '        BTM       '
let place1 = '        BTM       '

console.log(place);
console.log(place.trim());
console.log(place.trimEnd());
console.log(place1.trimStart());

//10 spilt()  it will return the array [] of string element 


let persnol = "my-name-is-ashish-i'm-22year-old"
console.log(persnol.split('-'));


console.log(persnol.split('-',3));
console.log(persnol.split('$',5)); //[ "my-name-is-ashish-i'm-22year-old" ]












