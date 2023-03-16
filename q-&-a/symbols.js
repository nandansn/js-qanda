// In JavaScript, a Symbol is a primitive data type that can be used as an identifier for object properties. Symbols are unique, meaning that each symbol created is distinct from every other symbol, even if they have the same description.

const symbol = Symbol("example");
const obj = {
  [symbol]: "This is a symbol property",
};

console.log(obj[symbol]); // This is a symbol property

// In the example above, we create a symbol with the description "example", and use it as the key for a property in an object. Note that we use square brackets around the symbol to indicate that it is being used as a property key.

// One common use case for symbols is to define properties in an object that you want to keep private and hidden from other code. Since symbols are unique, they cannot be accessed or modified by other code, which helps to prevent unintended modifications or access to sensitive data.

const _privateData = Symbol("privateData");

class Example {
  constructor() {
    this[_privateData] = "This is private data";
  }

  getPrivateData() {
    return this[_privateData];
  }
}

const example = new Example();
console.log(example.getPrivateData()); // This is private data
console.log(example[_privateData]); // undefined

// In the example above, we create a symbol to represent a private property in a class. The symbol is only accessible from within the class methods, and cannot be accessed from outside the class. This provides a simple way to hide sensitive data and prevent unintended access or modification.
