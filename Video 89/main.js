const express = require("express");
const blog = require("./routes/blog");
const shop = require("./routes/shop");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/blog", blog)
app.use("/shop", shop)

app
    .get("/", (req, res) => {
        console.log("Hey its get request");
        res.send("Hello World Get!");
    })
    .post("/", (req, res) => {
        console.log("Hey its post request");
        res.send("Hello World Post!");
    })
    .put("/", (req, res) => {
        console.log("Hey its put request");
        res.send("Hello World Put!");
    })
    .delete("/", (req, res) => {
        console.log("Hey its delete request");
        res.send("Hello World delete!");
    })
    .get("/index", (req, res) => {
        console.log("Hey its index");
        res.sendFile("templates/index.html", { root: __dirname });
    })
    .get("/api", (req, res) => {
        res.json({ a: 1, b: 2, c: 3, d: 4 });
    });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
