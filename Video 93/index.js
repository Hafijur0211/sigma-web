// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. hafijur.zip
// 5. Uday.zip
// 6. cat.jpg
// 7. hafijur.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// zip/hafijur.zip zip/Uday.zip
// pdf/this.pdf pdf/hafijur.pdf

import fs from "fs/promises"

let files = await fs.readdir("/Volumes/Backup Plus/fullstack-webdev/CWH/sigma-web/Video 93")
console.log(files)

console.log(fs)