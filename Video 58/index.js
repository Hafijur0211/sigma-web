/*
console.log("Hey Hafijur you are nice ");
console.log("Hey Hafijur you are good");
console.log("Hey Hafijur your tshirt is nice "); 
console.log("Hey Hafijur your course is good to");
*/

function nice(name) {
    console.log("Hey " + name + " you are nice");
    console.log("Hey " + name + " you are good");
    console.log("Hey " + name + " your tshirt is nice");
    console.log("Hey " + name + " your course is good to");
}

nice("Hafijur");
nice("Shivam");

function sum(a, b, c =3) {
    // console.log(a + b)
    return a + b + c;
}

result = sum(3, 5);
console.log("The sum of these numbers is :", result);


// Arrow function

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34)
func1(98)
func1(36)