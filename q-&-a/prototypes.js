// In JavaScript, prototypes are a way to implement object-oriented programming. Every object in JavaScript has a prototype, which is a reference to another object that provides default properties and methods for that object. When a property or method is accessed on an object and it doesn't exist on the object itself, JavaScript will look for it on the object's prototype, and if it's not found there, it will look on the prototype's prototype, and so on, until the property or method is found or the end of the prototype chain is reached.

// Prototypes are useful for implementing inheritance in JavaScript. When an object is created from a constructor function (which is a function that is used to create objects with a specific set of properties and methods), the prototype of the object is set to the constructor function's "prototype" property. This means that the object will inherit all of the properties and methods of the constructor function's prototype.

// Define a constructor function for a person object
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the person object's prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Create a new person object
const person1 = new Person("John", 30);

// Call the sayHello method on the person object
person1.sayHello(); // Outputs: "Hello, my name is John and I am 30 years old."

// Prototypes can also be used to add properties and methods to built-in JavaScript objects. For example, we could add a method to the String prototype to reverse a string:

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

const str = "hello";
console.log(str.reverse()); // Outputs: "olleh"

// In this example, we add a "reverse" method to the String prototype, which can then be called on any string object. This can be useful for adding functionality to built-in objects that are not available in the standard API. However, it's important to be careful when modifying built-in prototypes, as it can have unintended consequences and cause compatibility issues with other code.

// https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co
