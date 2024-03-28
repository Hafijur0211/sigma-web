// Chapter 8

// 1. Write a program to show different alerts when different buttons are clicked.

// 2. Create a website which is capable of storing bookmarks of your favorite website using href.

// 3. Repeat Q2 using event listeners.

/*
document.getElementById("google").addEventListener("click", function () {
    let url = "https://www.google.com";
    window.location = "https://www.google.com";
    window.focus();
});
*/

// 4. Write a javascript program to fetching contents of a website.

/*
const fetchContent = async (url)=>{
    con = await fetch(url);
    let a = await con.json()
    return a;
}

setInterval(async function(){
    let url ="https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
}, 3000)
*/

// 5. Create a glowing bulb effect using classList toggle method in javascript.

setInterval(async function () {
    document.querySelector("#bulb").classList.toggle("bulb");
}, 1000);
