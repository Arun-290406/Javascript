//Convert String to Number:

var amount="100";
// amount=Number(amount);// method-1
amount=parseInt(amount);// method-2
console.log(amount, typeof amount);

//Convert Number to String
let amo=199;
// amo=String(amo);//method-1
amo=amo.toString();//method-2
console.log(amo, typeof amo);

//Convert String to decimal

let amnt="130.80"
amnt=parseFloat(amnt);
console.log(amnt, typeof amnt);

//convert Number to Boolean

let a1=100;
let a2=0;
a1=Boolean(a1);
a2=Boolean(a2);
console.log(a1,a2,typeof a1, typeof a2);

//convert String to Boolean
let h1=""
let h2="Hello"
h1=Boolean(h1);
h2=Boolean(h2);
console.log(h1,typeof h1,h2,typeof h2);


console.log("hello"-3); //It will show a NAN  -- > Not An Number