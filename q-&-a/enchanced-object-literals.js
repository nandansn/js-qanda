// ref: https://www.geeksforgeeks.org/javascriptes6-object-literal-enhancement/

// In JavaScript ES6, enhanced object literals are a concise syntax for creating objects. They provide several features that make it easier and more concise to define objects, such as:

let title = 'soem title';
let author = 'soem author';
let price = '$10'

let book = {title, author, price}
console.log(book);


let amount = 100000
let rate = 8.25
let tenure = 36


let simpleInterest = function () {
    return  ((this.amount * this.rate ) / (100 * 12)) * this.tenure
}


let myInterest = {amount, rate, tenure, simpleInterest}

console.log(myInterest.simpleInterest())

// Computed property names: You can use expressions within square brackets [] to specify the property names of an object.

const firstName = 'John';
const lastName = 'Doe';

const person = {
  [firstName + lastName]: 'Full Name'
};

console.log(person.JohnDoe); // Full Name


// Shorthand property names: If a property has the same name as a variable, you can omit the property value and just use the variable name.

const nfirstName = 'John';
const nlastName = 'Doe';

const nperson = { nfirstName, nlastName };

console.log(nperson.nfirstName); // John
console.log(nperson.nlastName); // Doe


// Method definitions: You can define methods directly in an object literal, without using the function keyword.

const njperson = {
  firstName: 'John',
  lastName: 'Doe',
  sayHello() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  }
};

njperson.sayHello(); // Hello, my name is John Doe.



