let value;
const name="Arun";
value=`This is ${name}`;
console.log(value);

let val;
const nam="Ajay";
const Age=19;
val=`Hello,This is ${nam} and I am ${Age} Years old`;
console.log(val);

//String properties and methods

const s=new String("Hello World");
let x;
x=s.length;
console.log(x);


x=s.substring(0,5);
console.log(x);

x=s.charAt(3);
console.log(x);

x=s.split(' ');
console.log(x);

x=s.split('');
console.log(x);

x=s.replace('world', 'Maria');
console.log(x);


x=s.includes('Hel')
console.log(x);

x=s.slice(-11,-9);
console.log(x);

x=s.__proto__;
console.log(x);
