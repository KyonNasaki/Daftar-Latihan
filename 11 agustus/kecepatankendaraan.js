class Vehicle {
    #speed = 0;

    get speed() {
        return this.#speed;
    }

    accelerate(amount) {
        this.#speed = Math.min(180, this.#speed + amount);
    }

    brake(amount) {
        this.#speed = Math.max(0, this.#speed - amount);
    }
}

class Car extends Vehicle {
    accelerate(amount) {
        console.log("Car accelerating");
        super.accelerate(amount);
    }
}


const car = new Car();
car.accelerate(50); 
console.log(car.speed); 
car.brake(20);
console.log(car.speed); 
