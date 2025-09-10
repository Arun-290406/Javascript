let x;
const num=5;
x=num.toString();
console.log(x, typeof x);

x=num.toString().length;
console.log(x);


x=num.toFixed(2);
console.log(x);


x=num.toPrecision(2);
console.log(x);

x=num.toExponential(9);
console.log(x);

x=Number.MAX_VALUE;
console.log(x);

x=Number.MIN_VALUE;
console.log(x);
