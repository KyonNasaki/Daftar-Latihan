class Account {
    #balance = 0;

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    showBalance() {
        console.log(`Saldo anda adalah: ${this.#balance}`);
    }
}

class PremiumAccount extends Account {
    showBalance() {
        console.log(`Saldo anda adalah: ${this.balance} (Akun Premium)`);
    }
}


const akun = new Account();
akun.deposit(5000);
akun.showBalance(); 
const premium = new PremiumAccount();
premium.deposit(10000);
premium.showBalance(); 
