class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    info() {
        console.log(`Judul: ${this.title}, Penulis: ${this.author}`);
    }
}

class Ebook extends Book {
    constructor(title, author, fileSize) {
        super(title, author);
        this.fileSize = fileSize;
    }
    info() {
        console.log(`Judul: ${this.title}, Penulis: ${this.author}, Ukuran File: ${this.fileSize}MB`);
    }
}

const book1 = new Book('Laskar Pelangi', 'Andrea Hirata');
book1.info();

const ebook1 = new Ebook('Laskar Pelangi', 'Andrea Hirata', 30);
ebook1.info();