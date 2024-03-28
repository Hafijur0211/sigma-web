/*

let obj = {
    a: 1,
    b: "Hafijur",
};

console.log(obj);

*/

// ++++++++++++++++++++++++++++

// Prototype

/*

let animal = {
    eats: true,
};

let rabbit = {
    jumps: true,
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

*/

// Class

class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object is created...");
    }

    eats() {
        console.log("Kha raha hoon");
    }

    jumps() {
        console.log("Kood raha hoon");
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("Object is create and he is lion");
    }

    eats() {
        super.eats()
        console.log("Kha raha hoon roar");
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);
