let personalDetails = {
    name : 'Aryan',
    age : 21 ,
    address : ' BTM Layout',
    gender : 'M',
    contect : 9484739472,
    isActive : true
}
let personalDetails1 = {
    name : 'Nitin',
    age : 23 ,
    address : ' BTM Layout',
    gender : 'M',
    contect : 9484739472,
    isActive : true
}


// console.log(personalDetails);
// console.log(typeof(personalDetails));

// Add new pair (key & value ) to the existing object

// personalDetails.email = 'aryan123@gmail.com'
// console.log(personalDetails);
// console.log(personalDetails);
// console.log(personalDetails);


// update 

// personalDetails.isActive=false
// console.log(personalDetails);

// delete 

// delete personalDetails.email
// console.log(personalDetails);

// fatching 

// console.log(personalDetails.gender);

// console.log(`${personalDetails.name} and ${personalDetails.gender} `);



// string interpulation 

// let ename = 'sita'
// let gen = 'female'

// console.log(`my name is ${ename} and gender is ${gen}`);


// ! built in methods in object

// ? 1) key()-
console.log(Object.keys(personalDetails));

// ? 2) value

console.log(Object.values(personalDetails));


// ? 3) entries() key+value

console.log(Object.entries(personalDetails1));

// ? 4) assign() concetinate 2  object

let mock={
    'python':'1*',
    'sql':'*',
    'webtech':'1*'

}
let updaets = Object.assign(personalDetails,mock)
console.log(updaets);

// ? 5) seal() it stop adding or deleting but you modify somethings

// Object.seal(mock)

// ? 6) freeze () it stop adding or deleting but you modify 

Object.freeze(mock)
mock.powerBi = '1**'
console.log(mock);

delete mock.powerBi
console.log(mock);


mock.webtech='****'
console.log(mock);


 







