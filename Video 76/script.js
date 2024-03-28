/*

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 3000);
    });
}

console.log("Loading model...");

console.log("Do something else");

console.log("Load data");

let data = getData();

console.log(data);

console.log("process data");

console.log("task 2");

// Approch 1

data.then((v) => {
    console.log(data);

    console.log("process data");

    console.log("task 2");
});

*/

// Asynchronous function

/*

async function getData() {
    // simulate getting data from the server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 3000);
    });
}

async function main() {
    console.log("Loading model...");

    console.log("Do something else");

    console.log("Load data");

    let data = await getData();

    console.log(data);

    console.log("process data");

    console.log("task 2");
}

main()

*/

// Fetch API

// settle means resolve or reject
// resolve means promises has settled successfully
// reject means promises has not settled successfully

/*
async function getData() {
    let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(x);
    let data = await x.json();
    console.log(data);
    return 455;
}

async function main() {
    console.log("Loading model...");

    console.log("Do something else");

    console.log("Load data");

    let data = await getData();

    console.log(data);

    console.log("process data");

    console.log("task 2");
}

main();

*/

//  Post Request

async function getData() {
    let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    let data = await x.json();
    console.log(data);
    return 455;
}

async function main() {
    console.log("Loading model...");

    console.log("Do something else");

    console.log("Load data");

    let data = await getData();

    console.log(data);

    console.log("process data");

    console.log("task 2");
}

main();
