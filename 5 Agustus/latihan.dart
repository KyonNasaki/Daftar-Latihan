class Laptop {
  String nama;
  String jenis;
  String harga = 'Rp 5.000.000';

  Laptop(this.nama, this.jenis);

  void penjualan() {
    print('jenis laptopku $nama, Jenis laptopku $jenis, Harga laptopku $harga');
  }
}

void main() {
  var laptop1 = Laptop('Asus ROG', 'Laptop Gaming');
  laptop1.penjualan();
}

