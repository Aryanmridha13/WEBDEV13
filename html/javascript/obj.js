let personalDetails = {
    name : 'Aryan',
    age : 21 ,
    address : ' BTM Layout',
    gender : 'M',
    contect : 9484739472,
    isActive : true
}

console.log(personalDetails);
console.log(typeof(personalDetails));

// Add new pair (key & value ) to the existing object

personalDetails.email = 'aryan123@gmail.com'
console.log(personalDetails);


// update 

personalDetails.isActive=false
console.log(personalDetails);

// delete 

delete personalDetails.email
console.log(personalDetails);

// fatching 

console.log(personalDetails.gender);

console.log(`${personalDetails.name} and ${personalDetails.gender} `);



// string interpulation 

let ename = 'sita'
let gen = 'female'

console.log(`my name is ${ename} and gender is ${gen}`);
