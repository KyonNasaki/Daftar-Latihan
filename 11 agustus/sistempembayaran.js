class Payment {
    #amount;
    constructor(amount) {
        this.#amount = amount;
    }

    get amount() {
        return this.#amount;
    }

    process() {
        console.log(`Memproses pembayaran sebesar ${this.#amount}`);
    }
}

class CreditCardPayment extends Payment {
    process() {
        console.log(`Memproses pembayaran kartu kredit sebesar ${this.amount}`);
    }
}


const p = new Payment(100000);
p.process(); 
const cc = new CreditCardPayment(200000);
cc.process(); 
