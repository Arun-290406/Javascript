// var  [allowed re-declaration and update value]

var value1=10;
value1=30;
console.log(value1);   //update value

var val1="arun";
var val1="Arun Karthi"
console.log(val1);  // re-declaration


//let[allowed update value but not allow re-declaration]

let age=10;
age=18;
console.log(age);  //update value

if(true)
{
    let country="india";
    console.log(country);
}
// console.log(country);   //only access in blocked scope

let a=10,b=20,c=50;
console.log(b,c);

//const[not allow value update and not allow re-declaration]

const name="arun";
// name="kumar";     not allow update value
console.log(name);

if(true){
    const country="India";
    console.log(country);
}

const arr=[1,2,3,4];
arr.push(5,6);
console.log(arr);      //output 1,2,3,4,5,6

const person={ name:"arun"};
person.name="John";
person.email="arun@gmail.com"
console.log(person);



a=10;
b=50;
console.log(a+b);




















// let firstname='Arun';
// let LastName="kumar";
// console.log(firstname, LastName);

// let age=30;
// age=31;
// console.log(age);



// var name="arun";
// name="kumar";
// console.log(name);