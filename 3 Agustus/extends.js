// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(`${this.name} is eating.`);
//     }
// }

// class Cat extends Animal {
//     meow() {
//         console.log('${this.name} says meow!');
//     }
// }

// const myCat = new Cat('Tom');
// myCat.eat();
// myCat.meow();

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    meow() {
        console.log(`${this.name} si ${this.color} mengeong.`);
    }
}

const myCat = new Cat('Tom', 'putih');
myCat.meow();
myCat.eat();