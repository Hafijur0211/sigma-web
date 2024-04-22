// Chapter 7

// 1. Create a navbar and change the color of its first element to red.

/*
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
*/

// 2. Create a table without tbody. Now use "View page source" button to check whether it has a tbody or not.

/*
No
*/

// 3. Create an element with 3 children. Now change the color of first and last element to green.

/*
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"
*/

// 4. Write a javascript code to change background of all <li> tag to cyan.

/*
Array.from(document.getElementsByTagName("li")).forEach((element)=>{
  element.style.background = "red"
})
*/

// 5. Which of the following is used to look for the farthest ancestor that matches a given css selector
// a. matches b. closest c. container d. none of theses
// None of these 
