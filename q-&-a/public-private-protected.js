// JavaScript does not have a native way to define private, protected, or public properties and methods, unlike some other object-oriented programming languages. However, there are a few ways to simulate these concepts in JavaScript using various techniques.

// Public properties: These are properties that are accessible from outside the object and can be modified directly. They are the default in JavaScript, and can be defined simply by adding properties to an object:


class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const car1 = new Car('Honda', 'Civic', 2020);
console.log(car1.make); // Outputs: "Honda"


// Private properties: These are properties that are not accessible from outside the object and can only be modified from within the object. In JavaScript, one common way to define private properties is to use closures:


class Car {
  constructor(make, model, year) {
    let _vin = Math.floor(Math.random() * 1000000); // private property
    this.make = make;
    this.model = model;
    this.year = year;
    this.getVin = function() { // getter for private property
      return _vin;
    };
  }
}

car1 = new Car('Honda', 'Civic', 2020);
console.log(car1.getVin()); // Outputs: a random number
console.log(car1._vin); // Outputs: undefined (cannot access private property directly)


