// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
// Create
use("CrudDb");

// Create a new document in the collection.
// db.getCollection("courses").insertOne({
//   name: "web dev free course",
//   price: 0,
//   assignments: 12,
//   projects: 34,
// });

// Crate a new document in many collections
// db.getCollection("courses").insertMany([
//   {
//     name: "web dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 34,
//   },
//   {
//     name: "html course",
//     price: 0,
//     assignments: 8,
//     projects: 20,
//   },
//   {
//     name: "css course",
//     price: 0,
//     assignments: 10,
//     projects: 25,
//   },
//   {
//     name: "javascript course",
//     price: 0,
//     assignments: 15,
//     projects: 40,
//   },
//   {
//     name: "react course",
//     price: 0,
//     assignments: 20,
//     projects: 50,
//   },
//   {
//     name: "node.js course",
//     price: 0,
//     assignments: 18,
//     projects: 45,
//   },
//   {
//     name: "express course",
//     price: 0,
//     assignments: 12,
//     projects: 30,
//   },
//   {
//     name: "mongodb course",
//     price: 0,
//     assignments: 14,
//     projects: 35,
//   },
//   {
//     name: "bootstrap course",
//     price: 0,
//     assignments: 10,
//     projects: 25,
//   },
//   {
//     name: "git course",
//     price: 0,
//     assignments: 8,
//     projects: 20,
//   },
//   {
//     name: "web design course",
//     price: 0,
//     assignments: 12,
//     projects: 30,
//   },
// ]);

// Find
// Read
// let a = db.courses.find({price: 0});
// console.log(a.count());
// console.log(a.toArray());

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let b = db.courses.findOne({ price: 0 });
// console.log(b);

// Update
// db.courses.updateOne({ price: 0 }, { $set: { price: 100 } });
// db.courses.updateMany({ price: 0 }, { $set: { price: 1000 } })

// Delete
// db.courses.deleteOne({ price: 100 });
db.courses.deleteMany({ price: 1000 });
