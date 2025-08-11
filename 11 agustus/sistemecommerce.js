class Product {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(`Produk: ${this.name}`);
    }
}

class Clothing extends Product {
    constructor(name, size) {
        super(name);
        this.size = size;
    }

    display() {
        console.log(`Produk: ${this.name}, Ukuran: ${this.size}`);
    }
}


const p = new Product("Sepatu");
p.display(); 
const c = new Clothing("Kaos", "L");
c.display(); 
