const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const blog = require("./routes/blog");

// app.use(express.static("public"));

app.use("/blog", blog);

// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log(req.header);
    req.hafijur = "I am Hafijur";
    fs.appendFileSync("log.txt", `${Date.now()} is a ${req.method}\n`);
    console.log(`${Date.now()} is a ${req.method}`);
    // res.send("Hacked by Middleware 1")
    next();
});

// Middleware 2
app.use((req, res, next) => {
    console.log("M2");
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/about", (req, res) => {
    res.send("Hello about! " + req.hafijur);
});
app.get("/contact", (req, res) => {
    res.send("Hello contact!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
