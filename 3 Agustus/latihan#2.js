class employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

class Manager extends employee {
    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }

    getDepartment() {
        return this.department;
    }

    introduce() {
        console.log(`Nama: ${this.getName()}, Umur: ${this.getAge()}, Departemen: ${this.getDepartment()}`);
    }
}

const employee1 = new employee('Alice', 25);
const manager = new Manager('Yuka', 30, 'Pengembangan Produk');

console.log(`Manager: ${manager.getName()}`);
console.log(`Employee: ${employee1.getName()}`);

manager.introduce();
employee.prototype.introduce = function() {
    console.log(`Nama: ${this.getName()}, Umur: ${this.getAge()}`);
};
employee1.introduce();
