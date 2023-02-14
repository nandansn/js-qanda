// Optional chaining is a feature introduced in JavaScript ES2020 that allows you to access properties and methods of an object or array, even if some of the properties are undefined or null. It provides a convenient way to handle objects with potentially missing properties, without having to write conditional checks or raising errors.

// Optional chaining provides a convenient way to handle potentially missing properties in JavaScript, and can make your code more readable and error-resistant.



//const value = object?.property;

const person = {
  name: "John",
  age: "34",
  address: {
    street: "thangamani street",
    city: "erode",
    country: "india",
    state: "tamilnadu",
    contact: { phone: "123", mail: "abc@abc.com" },
  },
};

const person2 = { name: "nanda" };

let display = function (person) {
  console.log(person?.address?.contact?.phone ?? "no data");
};

display(person);
display(person2);


