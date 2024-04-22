const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/about", (req, res) => {
    res.send("Hello about");
});
app.get("/contact", (req, res) => {
    res.send("Hello contact");
});
app.get("/blog", (req, res) => {
    res.send("Hello blog");
});

// parameter and query

app.get("/blog/:slug", (req, res) => {
    // logic to fetch {slug} from db
    // for URL: http://localhost:3000/blog/intro-to-mongo?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-mongo' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }
    res.send(`Hello ${req.params.slug} `);
});

// app.get("/blog/into-to-javascript", (req, res) => {
//     // logic to fetch intro to js from db
//     res.send("Hello blog");
// });

// app.get("/blog/intro-to-python", (req, res) => {
//     // logic to fetch intro to python from db
//     res.send("Hello blog");
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
