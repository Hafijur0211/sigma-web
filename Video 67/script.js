// console.log("Hello world");

const body = document.body;
// console.log(body);

const childNodes = document.body.childNodes;
// console.log(childNodes);
// console.log(childNodes[1]);
// console.log(childNodes[1].childNodes);

const cont = document.body.childNodes[1];
// console.log(cont);
// console.log(cont.firstChild);
// console.log(cont.lastChild); 
// console.log(cont.firstElementChild);
// console.log(cont.lastElementChild);   
// console.log((cont.lastElementChild.style.color = "red"));   
// console.log((cont.lastElementChild.style.backgroundColor = "green"));   
// console.log(cont.lastElementChild.parentElement);   


// const firstChild = document.body.firstElementChild
// const firstChild = document.body.firstElementChild.childNodes
// const firstChild = document.body.firstElementChild.children
// const firstChild = document.body.firstElementChild.children[1]
// const firstChild = document.body.firstElementChild.children[2]
// const firstChild = document.body.firstElementChild.children[3]
// const firstChild = document.body.firstElementChild.children[3].nextElementSibling
const firstChild = document.body.firstElementChild.children[3].previousElementSibling
// console.log(firstChild)

// const table = document.body.children
const table = document.body.children[1].rows
// const table = document.body.children[1]
console.log(table)