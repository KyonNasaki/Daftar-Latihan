// enum Cuaca { cerah, hujan, berawan }

// void main() {
//   var hariIni = Cuaca.hujan;

//   if (hariIni == Cuaca.hujan) {
//     print('Bawa payung!');
//   }
// }

enum StatusPengiriman { belumDikirim, dikirim, diterima }

void main() {
  StatusPengiriman status = StatusPengiriman.dikirim;
  switch (status) {
    case StatusPengiriman.belumDikirim:
      print('Paket belum dikirim.');
      break;
    case StatusPengiriman.dikirim:
      print('Paket sedang dalam perjalanan.');
      break;
    case StatusPengiriman.diterima:
      print('Paket sudah sampai.');
      break;
  }
}
