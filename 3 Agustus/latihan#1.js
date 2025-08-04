class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} bersuara.`);
    }
}

class Dog extends Animal {
    constructor(name, barkSound) {
        super(name);
        this.barkSound = barkSound;
    }

    bark() {
        console.log(`${this.name} menggonggong: ${this.barkSound}`);
    }
}

class Bird extends Animal {
    /**
     * @param {string} name 
     * @param {boolean} canFly 
     */
    constructor(name, canFly) {
        super(name);
        this.canFly = canFly;
    }

    fly() {
        if (this.canFly) {
            console.log(`${this.name} bisa terbang.`);
        } else {
            console.log(`${this.name} tidak bisa terbang.`);
        }
    }
}

const myDog = new Dog('Gregory', 'Woof Woof');
myDog.speak();
myDog.bark();
const myBird = new Bird('Trakeo', true);
myBird.speak();
myBird.fly();

