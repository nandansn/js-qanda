// The spread operator (...) is a JavaScript operator that allows you to expand an array, an object, or a string into its individual elements. It's a convenient way to spread the values of an iterable object into separate variables or to concatenate arrays.

// array

let jan_to_jun = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
let jul_to_dec = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let new_months = [...jan_to_jun, ...jul_to_dec];

console.log(new_months);

// object

let car = { car_name: "BMW", color: "black" };
let person = { name: "John", age: "34" };

let person_n_car = { ...person, ...car };

console.log(person_n_car);
