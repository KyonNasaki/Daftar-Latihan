class Animal {
    speak() {
        console.log('Hewan bersuara...');
    }
}

class Cat extends Animal {
    speak() {
        console.log('Kucing mengeong...');
    }
}

const c = new Cat();
c.speak(); 