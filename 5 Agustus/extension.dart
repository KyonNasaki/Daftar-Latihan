class Siswa {
  String nama;
  Siswa(this.nama);
}

extension SapaSiswa on Siswa {
  void sapa() {
    print('Halo, saya $nama, siswa RPL!');
  }
}

void main() {
  var siswa = Siswa('Rudi');
  siswa.sapa();
}
