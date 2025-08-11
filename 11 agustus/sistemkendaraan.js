class Vehicle {
    move() {
        console.log("Kendaraan bergerak");
    }
}

class Car extends Vehicle {
    move() {
        console.log("Mobil berjalan di jalan raya");
    }
}

class Boat extends Vehicle {
    move() {
        console.log("Perahu berlayar di laut");
    }
}


const v = new Vehicle();
v.move(); 
const c = new Car();
c.move(); 
const b = new Boat();
b.move(); 
