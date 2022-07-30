const prompt = require("prompt-sync")();
var a;
var b;
var c;
a = prompt("Enter the value of a : ");
console.log(a);
b = prompt("Enter the value of b : ");
console.log(b);
c= prompt("Enter the value of c : ");
console.log(c);
let x = a + b * c;
let y = c + a / b;
let z=  a % b + c;
if(x>y && x>z)
console.log("x is maximum");
else if(y>x && y>z)
console.log("y is maximum");
else
console.log("z is maximum");
