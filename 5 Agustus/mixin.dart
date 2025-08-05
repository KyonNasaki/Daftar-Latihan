class Hewan {
  void hidup() {
    print('Hewan hidup.');
  }
}

mixin Terbang {
  void terbang() {
    print('Terbang di langit');
  }
}

class Elang extends Hewan with Terbang {}

void main() {
  var e = Elang();
  e.hidup();
  e.terbang();
}
