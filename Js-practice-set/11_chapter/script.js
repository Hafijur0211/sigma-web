// 1. Create a javascript class to create a complex number. Create a constructor to set the real and the complex part.

/*
class Complex {
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
}

let a = new Complex(2, 4)
let b = new Complex(6, 2)
*/

// 2. Write a method to add two complex number in the above class.

/*
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(num) {
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
        return new Complex();
    }
}

let a = new Complex(2, 4);
let b = new Complex(6, 2);

a.add(b);
console.log(`${a.real}+${a.imaginary}i`);
*/

// 3. Create a class Students from a class Human. Override a method and see changes
/*
class Human {
    constructor(name, favfood) {
        this.name = name;
        this.favfood = favfood;
    }
    walk() {
        console.log(this.name + "Human is walking");
    }
}

class Student extends Human {
    walk() {
        console.log(this.name + " Student is walking");
    }
}

let o = new Student("Hafijur", "Chicken");
o.walk();
*/

// 4. See if students in an instance of human using instanceof keyword.
/*
class Human {
    constructor(name, favfood) {
        this.name = name;
        this.favfood = favfood;
    }
    walk() {
        console.log(this.name + "Human is walking");
    }
}

class Student extends Human {
    walk() {
        console.log(this.name + " Student is walking");
    }
}

let o = new Student("Hafijur", "Chicken");
o.walk();

console.log(o instanceof Human)
*/

// 5. Use getters and setter to set and get the real and imaginary part of the complex numbers.

class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(num) {
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
        return new Complex();
    }

    get real() {
        return this._real;
    }
    get imaginary() {
        return this._imaginary;
    }

    set imaginary(newImaginary) {
        this._imaginary = newImaginary;
    }
    set real(newReal) {
        this._real = newReal;
    }
}

let a = new Complex(2, 4);
console.log(a.real, a.imaginary);
a.real = 10;
a.imaginary = 10;
let b = new Complex(6, 2);

a.add(b);
console.log(`${a.real}+${a.imaginary}i`);
