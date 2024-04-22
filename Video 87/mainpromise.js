import fs from 'fs/promises'

let a = await fs.readFile("hafijur.txt")

let b = await fs.writeFile('hafijur.txt', '\n\n\n\n this is amazing promise')

console.log(a.toString())