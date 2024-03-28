const fs = require("fs");
const fs = require("fs/promises")

// console.log(fs);

console.log("starting");
// fs.writeFileSync("hafijur.txt", "Hafijur is good boy");

fs.writeFile("hafijur2.txt", "Hafijur is a good boy", () => {
    console.log("done");
    fs.readFile("hafijur2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
});

fs.appendFile("hafijur.txt ", "hafijurbro", (e, d)=>{
    console.log(d)
})

console.log("ending");
