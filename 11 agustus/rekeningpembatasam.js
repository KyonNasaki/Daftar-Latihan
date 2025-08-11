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

    withdraw(amount) {
        if (amount > 0 && this.#balance - amount >= 0) {
            this.#balance -= amount;
        } else {
            console.log("Penarikan ditolak: saldo tidak cukup.");
        }
    }
}

class SavingsAccount extends Account {
    withdraw(amount) {
        if (amount > this.balance / 2) {
            console.log("Penarikan ditolak: tidak boleh lebih dari 50% saldo.");
        } else {
            super.withdraw(amount);
        }
    }
}


const tabungan = new SavingsAccount();
tabungan.deposit(1000);
tabungan.withdraw(600); 
tabungan.withdraw(400); 
console.log(tabungan.balance); 
