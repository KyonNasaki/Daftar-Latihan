class Kucing {
  late String nama;
  late String jenis = 'Persia';
  // Kucing(this.nama, this.jenis);
Kucing(String nama, String jenis) {
 this.nama = nama;
 this.jenis = jenis; 
}

void perkenalan() {
  print('Nama Kucingku $nama, Jenis Kucingku $jenis');
}
}

void main() {
  var kucing1 = Kucing('Memo', 'Persia');
  kucing1.perkenalan();
}
