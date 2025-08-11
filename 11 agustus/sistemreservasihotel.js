class HotelRoom {
    #isBooked = false;

    bookRoom() {
        this.#isBooked = true;
    }

    checkStatus() {
        if (this.#isBooked) {
            console.log("Kamar sudah dipesan.");
        } else {
            console.log("Kamar tersedia.");
        }
    }
}


const room = new HotelRoom();
room.checkStatus(); 
room.bookRoom();
room.checkStatus(); 






