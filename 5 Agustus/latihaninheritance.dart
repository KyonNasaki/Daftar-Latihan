class Kendaraan {
  late String nama;
  late String jenis;
  Kendaraan(this.nama, this.jenis);
}

class Sepeda {
  late String nama;
  late String jenis = 'Gunung';
  // Sepeda(this.nama, this.jenis);
  Sepeda(String nama, String jenis) {
    this.nama = nama;
    this.jenis = jenis;
  }

  void perkenalan() {
    print('Nama Sepedaku $nama, Jenis Sepedaku $jenis');
  }
}

void main() {
  var sepeda1 = Sepeda('Polygon', 'Gunung');
  sepeda1.perkenalan();
  
  var kendaraan1 = Kendaraan('Toyota', 'SUV');
  print('Nama Kendaraan: ${kendaraan1.nama}, Jenis Kendaraan: ${kendaraan1.jenis}');
}
