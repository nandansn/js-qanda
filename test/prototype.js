class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getSalary() {
    return this.age * 100000;
  }
}

let nanda = new Employee("n", 43);
let sanmathi = new Employee("s", 36);
