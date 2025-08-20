class Mahasiswa {
    #nama;

    constructor(nama) {
        this.#nama = nama;
    }

    get nama() {
        return this.#nama.toUpperCase();
    }

    set nama(value) {
        if (value.length < 3) {
            console.log("Nama terlalu pendek");
        return;
        }
        this.#nama = value;
    }
}
const mhs = new Mahasiswa("Win");
console.log(mhs.nama);

mhs.nama = "budi";
mhs.nama = "rusdi";
mhs.nama = "au";
console.log(mhs.nama);