// If else conditionals

// The "if" statement in JavaScript is used to execute a block of code if a certain condition is met. The "else" clause is used to execute a block of code if the condition is not met.

// Here is the basic syntax for an "if" statement:

// if (condition) {
// code to be executed if condition is true
// }
// Here is the syntax for an "if" statement with an "else" clause:

// if (condition) {
// code to be executed if condition is true
// } else {
// code to be executed if condition is false
// }

// The condition is a boolean expression that evaluates to either true or false. If the condition is true, the code in the "if" block is executed. If the condition is false, the code in the "else" block is executed (if present).

// For example:

// let age = 18;
// let grace = 2;

// if (age == 18) {
//   console.log("You can drive");
// } else {
//   console.log("You can't drive");
// }

// Arithmetic operator

// console.log(age + grace) // addiction
// console.log(age - grace) // subtraction
// console.log(age * grace) // multiplication
// console.log(age / grace) // division
// console.log(age ** grace) // exponentiation
// console.log(age % grace) // modulus

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Assignments Operators

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// if else if

/*
The "if-else ladder" is a control structure in JavaScript that allows you to execute a different block of code depending on multiple conditions. It is called a ladder because it consists of multiple "if" and "else" statements arranged in a ladder-like fashion.

Here is the syntax for an "if-else ladder":

if (condition1) {
code to be executed if condition1 is true
} else if (condition2) {
code to be executed if condition1 is false and condition2 is true
} else if (condition3) {
code to be executed if condition1 and condition2 are false and condition3 is true
} ...
else {
code to be executed if all conditions are false
}

In this structure, each "if" statement is followed by an optional "else" statement. If the first "if" condition is true, the code in the corresponding block is executed and the rest of the ladder is skipped. If the first "if" condition is false, the second "if" condition is evaluated, and so on. If none of the conditions are true, the code in the "else" block is executed.

For example:
*/

let age = 0;

if (age == 18) {
  console.log("You can drive");
} else if (age == 0) {
  console.log("Are you kidding");
} else {
  console.log("You can't drive");
}

// Ternary operator

/*
The ternary operator is a shorthand way to write an if-else statement in JavaScript. It takes the form of condition ? value1 : value2, where condition is a boolean expression, and value1 and value2 are expressions of any type. If condition is true, the ternary operator returns value1; if condition is false, it returns value2.

Here's an example of how you can use the ternary operator to assign a value to a variable based on a condition:

let x = 10;
let y = 20;
let max;

max = (x > y) ? x : y;

console.log(max); // Outputs: 20
In this example, the ternary operator checks whether x is greater than y. If it is, max is assigned the value of x; otherwise, it is assigned the value of y.

The ternary operator can be a useful and concise way to write simple if-else statements, but it can become difficult to read and understand when used for more complex statements or nested inside other expressions. In these cases, it may be better to use a regular if-else statement instead.
*/
