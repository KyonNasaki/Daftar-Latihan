class Hewan {
  void makan() {
    print('Hewan sedang makan.');
  }
}

class Kucing extends Hewan {
  void suara() {
    print('Meong!');
  }
}

void main() {
  var kitty = Kucing();
  kitty.makan();
  kitty.suara();
}
