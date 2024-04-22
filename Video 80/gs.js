class User {
    constructor(name) {
        // invoke the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short");
            return;
        }
        this._name = value;
    }
}

let user = new User("Jhon");
console.log(user.name); // Jhon

user = new User(""); // Name is too short

user.name = "Hafijur"
console.log(user); // Hafijur
