class Employee {
    #workingHours = 0;

    get workingHours() {
        return this.#workingHours;
    }

    logHours(hours) {
        if (hours > 0) {
            this.#workingHours += hours;
        }
    }
}

class RemoteEmployee extends Employee {
    logHours(hours) {
        if (hours > 8) {
            console.log("Exceeded daily work limit");
        } else {
            super.logHours(hours);
        }
    }
}


const emp = new Employee();
emp.logHours(5);
console.log(emp.workingHours); 
const remote = new RemoteEmployee();
remote.logHours(10); 
remote.logHours(7);
console.log(remote.workingHours); 
