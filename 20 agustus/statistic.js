class Matematika {
    static pi = 3.14;

    static luasLingkaran(jari) {
        return this.pi * jari * jari;
    }
}

console.log(Matematika.pi);
console.log(Matematika.luasLingkaran(7));