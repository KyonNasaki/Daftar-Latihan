class Ticket {
    constructor(event, price) {
        this.event = event;
        this.price = price;
    }

    printTicket() {
        console.log(`Tiket untuk ${this.event}, Harga: ${this.price}`);
    }
}

class VIPTicket extends Ticket {
    printTicket() {
        console.log(`Tiket untuk ${this.event}, Harga: ${this.price} (VIP)`);
    }
}

// Contoh penggunaan:
function createTicket(event, price) {
    if (price > 100000) {
        return new VIPTicket(event, price);
    } else {
        return new Ticket(event, price);
    }
}

const t1 = createTicket("Konser A", 90000);
t1.printTicket(); 
const t2 = createTicket("Konser B", 150000);
t2.printTicket(); 