class Airplane {
    #altitude = 0;

    get altitude() {
        return this.#altitude;
    }

    ascend(meters) {
        this.#altitude = Math.min(12000, this.#altitude + meters);
    }

    descend(meters) {
        this.#altitude = Math.max(0, this.#altitude - meters);
    }
}

class Jet extends Airplane {
    ascend(meters) {
        super.ascend(meters * 2);
    }
}


const jet = new Jet();
jet.ascend(3000); 
console.log(jet.altitude); 
jet.descend(1000);
console.log(jet.altitude); 
