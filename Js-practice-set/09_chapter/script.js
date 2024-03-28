// 1. Write a program to load a javascript file i a browser using Promises. use .then() to display an alert when the load is complete.

/*
const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(src + " Done Success");
        };
        document.head.append(script);
    });
};

let a = loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
);
a.then((value) => {
    console.log(value);
});
*/

// 2. Write the same program from previous question and use async/await syntax.

/*

const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(src + " Done Success");
        };
        document.head.append(script);
    });
};

const main = async () => {
    console.log(new Date().getMilliseconds());
    let a = await loadScript(
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    );
    console.log(a);
    console.log(new Date().getMilliseconds());
};
main();
*/

// 3. Create a promise which reject after 3 seconds. use an async/await to get its value use a try catch to handle its error.

/*
const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(src + " Done Success");
        };
        document.head.append(script);
    });
};

let p = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Please this is not acceptable"));
        }, 1000);
    });
};
let a = async () => {
    try {
        let c = await p();
        console.log(c);
    } catch (err) {
        console.log("This error has been handled");
    }
};
a();
*/

// 4. Write a program using Promises.all() inside an async/await to await 3 promises. compare its result with the case where we await these promises one by one.


const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(src + " Done Success");
        };
        document.head.append(script);
    });
};

let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    });
};

let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 1000);
    });
};

let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 3000);
    });
};

const run = async () => {
    console.time("run");

    // let a1 = await p1();
    // let a2 = await p2();
    // let a3 = await p3();

    let a1 = await p1();
    let a2 = await p2();
    let a3 = await p3();

    let a1a2a3 = await Promise.all([a1, a2, a3]);
    console.log(a1a2a3);

    // console.log(a1, a2, a3);

    console.timeEnd("run");
};

run();
