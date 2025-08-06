// class BankAccount {
//     constructor(){
//         this._balance = 0; 
//     }

//     deposit(amount) {
//         this._balance += amount;
//     }

//     showBalance() {
//         console.log(`Saldo saat ini: Rp${this._balance}`);
//     }
    
// }

// const akun = new BankAccount();
// akun.deposit(500000);
// akun.showBalance(); 

// akun._balance = 99999999; 
// akun.showBalance(); 

class SecureAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }
    showBalance() {
        console.log(`Saldo aman: Rp${this.#balance}`);
    }
}
const akun = new SecureAccount();
akun.deposit(500);
// akun.#balance = 99999999; // Tidak bisa diakses dari luar, baris ini harus dihapus/di-comment
akun.showBalance(); 