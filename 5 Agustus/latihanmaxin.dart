class Kerja {
  void hidup() {
    print('Saya bekerja');
  }
}

mixin Lembur {
  int jamKerja = 2;

  void cekLembur() {
    if (jamKerja > 2) {
      print('Lembur hari ini!');
    } else {
      print('Tidak ada lembur hari ini.');
    }
  }

  void kerja() {
    print('Saya bekerja $jamKerja jam.');
  }
}

class Staff extends Kerja with Lembur {}

void main() {
  var lembur = Staff();
  lembur.hidup();
  lembur.kerja();
  lembur.cekLembur();
}
