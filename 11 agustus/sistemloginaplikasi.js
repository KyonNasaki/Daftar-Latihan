class User {
    #password;
    constructor(password) {
        this.#password = password;
    }

    checkPassword(input) {
        if (input === this.#password) {
            console.log("Benar");
        } else {
            console.log("Salah");
        }
    }
}


const user = new User("rahasia");
user.checkPassword("rahasia"); 
user.checkPassword("salah");  