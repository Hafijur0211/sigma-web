// Chapter 6

// 1. Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive

/*
let age = prompt("Enter your age");
age = Number.parseInt(age);

const canDrive = (age) => {
  return age >= 18 ? true : false;
};

if (canDrive(age)) {
  alert("Yes you can drive");
} else {
  alert("You can't drive");
}
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. In Q1 use confirm to ask the user if he wants to see the prompt again.

/*
let runAgain = true;
const canDrive = (age) => {
  return age >= 18 ? true : false;
};

while (runAgain) {
  let age = prompt("Enter your age");
  age = Number.parseInt(age);

  if (canDrive(age)) {
    alert("Yes you can drive");
  } else {
    alert("You can't drive");
  }
  runAgain = confirm("Do you want to play again?");
}
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. In the previous question use console.error to log the error if the age entered in negative.

/*
let runAgain = true;
const canDrive = (age) => {
  return age >= 18 ? true : false;
};

while (runAgain) {
  let age = prompt("Enter your age");
  age = Number.parseInt(age);
  if(age<0){
    console.log("Please enter a valid age");
    break;
  }

  if (canDrive(age)) {
    alert("Yes you can drive");
  } else {
    alert("You can't drive");
  }
  runAgain = confirm("Do you want to play again?");
}
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. Write a program to change the URL of google.com (Redirection) if user enter a number greater than 4.

/*
let number = prompt("Enter a number")
number = Number.parseInt(number)

if(number>4){
  location.href = "http://google.com"
}
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 5. Change the background of the page to yellow red or any other color based on user input through prompt.

/*
let color = prompt("Enter the page background color")
document.body.style.background = color
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++