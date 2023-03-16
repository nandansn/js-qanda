// In JavaScript, default parameters allow you to specify default values for function parameters in case they are not provided when the function is called. This can be useful when you want to provide default behavior for a function, in case the arguments passed to it are missing or undefined.

function greet(name = "Stranger") {
  console.log(`Hello, ${name}!`);
}

greet("John"); // Hello, John!
greet(); // Hello, Stranger!
