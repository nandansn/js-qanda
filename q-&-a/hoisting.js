// https://dev.to/lydiahallie/javascript-visualized-hoisting-478h

display();
// console.log(sum(1,2)); // ReferenceError: Cannot access 'sum' before initialization
// console.log(name);  // ReferenceError: Cannot access 'name' after initialization
// console.log(PI); // ReferenceError: Cannot access 'PI' after initialization
console.log(price);
// console.log(multi(8, 9)); // TypeError: multi is not a function

let sum = (a, b) => a + b;
function display() {
  console.log("hosting");
}
let name = "nanda";
const PI = 3.14;
var price = 200;
var multi = function (a, b) {
  return a * b;
};
