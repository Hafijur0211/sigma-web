/*
Create a faulty calculator using JavaScript

This faulty calculator does following 

It takes two numbers as input from the user 
It perform wrong operation as follow
+ ----> -
* ----> +
- ----> /
/ ----> **

it perform wrong operation 10% of the time
*/

let random = Math.random();
let a = prompt("Enter the first number");
let c = prompt("Enter operation");
let b = prompt("Enter the second number");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  // Perform the calculation
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  // Perform wrong calculation
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
