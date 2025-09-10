//implict coercion
console.log(5+true);   //true = 1  and false = 0;

console.log("5"+1); 
console.log("5"-1);

//explict coercion

var x=Number("10")+5;
console.log(x);

var x=true+Boolean("hello");   //true + true = 2
console.log(x);
