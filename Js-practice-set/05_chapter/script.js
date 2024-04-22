// Chapter 5

// 1. Create a array of numbers and take input from the user to add numbers to this array.

/*
let arr = [1,2,3,4,5,6,7,83]
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. Keep adding numbers to the array in 1 until 0 is added to the array

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 83];
let a;
do {
   a = prompt("Enter a number");
  a = Number.parseInt(a);
  arr.push(a);
} while (a != 0);
console.log(arr);
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. filter for numbers divisible by 10 from a given array.

/*
let arr = [1,2,30,4,50,6,70,8,670]
let n = arr.filter((x)=>{
  return x%10 == 0
})
console.log(n);
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. Create an array of square of given numbers.

/*
let arr = [1,2,30,4,50,6,70,8,670]
let n = arr.map((x)=>{
  return x*x
})
console.log(n);
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 5. Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated)

/*
let arr = [1, 2, 3, 4, 5];
let n = arr.reduce((x1, x2) => {
  return x1 * x2;
});

console.log(n);
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++