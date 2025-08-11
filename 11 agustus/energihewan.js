class Animal {
    #energy = 0;

    get energy() {
        return this.#energy;
    }

    eat(amount) {
        this.#energy = Math.min(100, this.#energy + amount);
        console.log(`Energi sekarang: ${this.#energy}`);
    }

    sleep(time) {
        
        this.#energy = Math.min(100, this.#energy + time * 2);
        console.log(`Energi setelah tidur: ${this.#energy}`);
    }
}

class Dog extends Animal {
    eat(amount) {
        
        super.eat(amount * 2);
    }
}


const dog = new Dog();
dog.eat(10);      
dog.sleep(5);     
