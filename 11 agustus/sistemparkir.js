class ParkingSpot {
    #isOccupied = false;

    get isOccupied() {
        return this.#isOccupied;
    }

    occupy() {
        this.#isOccupied = true;
        console.log("Spot occupied.");
    }

    vacate() {
        this.#isOccupied = false;
        console.log("Spot vacated.");
    }
}

class ElectricParkingSpot extends ParkingSpot {
    occupy(car) {
        if (!car || !car.isElectric) {
            console.log("Only electric cars allowed");
        } else {
            super.occupy();
        }
    }
}


const spot = new ParkingSpot();
spot.occupy();
spot.vacate();

const eSpot = new ElectricParkingSpot();
const electricCar = { isElectric: true };
const gasCar = { isElectric: false };
eSpot.occupy(gasCar); 
eSpot.occupy(electricCar);