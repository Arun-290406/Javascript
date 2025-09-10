

// To display as a Developer


const mystring='delevoper';
let x=mystring.charAt(0).toUpperCase()+mystring.substring(1,9);  //soln-1
console.log(x);

x=mystring[0].toUpperCase()+mystring.substring(1);  //soln-2
console.log(x);

x=`${mystring.charAt(0).toUpperCase()}${mystring.substring(1)}`;  //soln-3
console.log(x);


//to display as a DevelopeR
x=mystring.charAt(0).toUpperCase()+mystring.substring(1,8)+mystring.charAt(8).toUpperCase();
console.log(x);
