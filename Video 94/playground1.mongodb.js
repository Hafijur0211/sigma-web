// Select the database to use.
use("SigmaDatabase");

// Insert a few documents into the courses collection.
db.getCollection("courses").insertMany([
    {
        name: "Java",
        Price: 2000,
        Instructor: "Hafijur",
    },
    {
        name: "Python",
        Price: 2500,
        Instructor: "Jane",
    },
    {
        name: "JavaScript",
        Price: 2200,
        Instructor: "John",
    },
    {
        name: "C++",
        Price: 2300,
        Instructor: "Jack",
    },
    {
        name: "C#",
        Price: 2400,
        Instructor: "Jill",
    },
    {
        name: "Ruby",
        Price: 2100,
        Instructor: "Ryan",
    },
    {
        name: "PHP",
        Price: 1900,
        Instructor: "Peter",
    },
    {
        name: "Swift",
        Price: 2700,
        Instructor: "Sara",
    },
    {
        name: "Kotlin",
        Price: 2600,
        Instructor: "Kevin",
    },
    {
        name: "Go",
        Price: 2800,
        Instructor: "Grace",
    },
]);


// Print a message to the output window.
console.log(`Done Inserting Data`);

