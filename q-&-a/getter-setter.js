// https://www.programiz.com/javascript/getter-setter


// In JavaScript, getters and setters are methods that allow you to define custom behavior when getting or setting the value of an object property. They are a way to add computed properties to an object, or to add validation or side effects to property access.

const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.fullName); // Output: "John Doe"


// In JavaScript, you can also use Object.defineProperty() method to add getters and setters. For example,

const student = {
    firstName: 'Monica'
}

// getting property
Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.firstName); // Monica

// changing the property value
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah