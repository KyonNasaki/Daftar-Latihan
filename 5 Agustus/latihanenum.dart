enum JenjangPendidikan {
  SD,
  SMP,
  SMA,
  SMK,
}

void main() {
  JenjangPendidikan status = JenjangPendidikan.SMK;
  switch (status) {
    case JenjangPendidikan.SD:
      print('Anda berada di jenjang SD.');
      break;
    case JenjangPendidikan.SMP:
      print('Anda berada di jenjang SMP.');
      break;
    case JenjangPendidikan.SMA:
      print('Anda berada di jenjang SMA.');
      break;
    case JenjangPendidikan.SMK:
      print('Anda berada di jenjang SMK.');
      break;
  }
}


