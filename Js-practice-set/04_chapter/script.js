// Chapter 4

// 1. What will the following print in javascript console.log("haf\".length)

/*
let str = 'Haf" ';
console.log(str.length);
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. Explore the includes, start with & ends with functions of a string.

/*
const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(sentence.includes(word))

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. Write a program to convert a given string to lowercase.

/*
const word= 'Fox'
console.log(word.toLowerCase())
console.log(word.toUpperCase())
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. Extract the amount out of this string "Please give Rs 1000"

/*
let str = "Please give Rs 1000"
let amount = Number.parseInt(str.slice(15))
console.log(amount)
console.log(typeof amount)
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 5. Try to change 4th character of a given string were you able to do it

/*
let friend = "Deepika"
friend[3] = "R"
console.log(friend)  // friend is not changed, because string is immutable
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++