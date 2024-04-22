alert("Hello world!");

console.log("Code is running...");

var a = prompt("Enter your number");

var isTrue = confirm(
  "Are you sure you want to leave this page and blast your computer"
);

if (isTrue) {
  console.log("Computer is Blasting");
} else {
  console.log("Computer is not Blasting");
}

console.log(a);


document.title = "Hey I am good"