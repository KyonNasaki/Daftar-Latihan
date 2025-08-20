class burung {
    constructor(nama) {
        this.nama = nama;
    }
    bersuara() {
        console.log(`${this.nama} bersuara cik cik`);
    }
}

class Ayam extends Burung {
    constructor(nama) {
        super(nama);
    }
    bersuara() {
        console.log('${this.nama} bersuara kukuruyuk');
    }
}

class Bebek extends Burung {
    constructor(nama) {
        super(nama);
    }
    bersuara() {
        console.log("kakakak");
    }
}

const daftarBurung = [new Ayam("Ayam"), new Bebek("Bebek")];

daftarBurung.forEach(burung => {
    burung.bersuara();
});