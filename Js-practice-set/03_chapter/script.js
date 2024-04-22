// Javascript chapter 3

// 1. Write a program to print the marks of a student in an object using for loop

// obj = {
//   Hafijur: 98,
//   Rohan: 76,
//   Akash: 80,
// };

/*
let marks = {
  hafijur: 90,
  shubhan: 9,
  akash: 56,
  rohan: 4,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. Write the program in question 1 using for in loop

/*
for (let key in marks) {
  console.log("The marks of " + key + " are " + marks[key]);
}
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. Write a program to print "try again" until the user enter the correct number

/*
let cn = 4
let i
while (i != cn){
  console.log("Try again")
  i = prompt("Enter a number")
}
*/

// console.log("You have enter a correct number")

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. Write a function to find mean of 5 numbers.

/*
const mean = (a,b,c,d)=>{
return(a+b+c+d)/4
}

console.log(mean(4,5,6,7,8))
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++