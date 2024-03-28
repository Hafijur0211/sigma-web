console.log("This is promises");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    console.log(a);
    if (a < 0.5) {
        reject("No random number was not supporting you");
    } else {
        setTimeout(() => {
            console.log("yes i am done");
            resolve("Hafijur");
        }, 3000);
    }
});

// Promises api

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    console.log(a);
    if (a < 0.5) {
        reject("No random number was not supporting you 2");
    } else {
        setTimeout(() => {
            console.log("yes i am done 2");
            resolve("Hafijur 2");
        }, 3000);
    }
});

// prom1.then((res) => {
//     console.log("done");
// }).catch((err)=>{
//     console.log(err)
// })

// let p3 = Promise.all([prom1, prom2]);
// let p3 = Promise.allSettled([prom1, prom2]);
let p3 = Promise.race([prom1, prom2]);
p3.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
