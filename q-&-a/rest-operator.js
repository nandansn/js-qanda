// The rest operator (...) in JavaScript is similar to the spread operator, but instead of expanding the values of an array or object, it collects the remaining values into an array. The rest operator is often used in function parameters to allow for a variable number of arguments.

function sum(...numbers) {
  let total = numbers.reduce((number, total) => {
    total = total + number;

    return total;
  }, 0);

  console.log(total);
}

sum(1, 2, 3, 4, 4);


let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let [day1, day2, ...leave] = days

console.log(day1,day2,leave);


let person = {name: 'John', age: '43', address: {street: 'John Street', city: 'San Francisco', state: 'CA', country: 'United States '}}



let {name, age, ...details} = person

console.log(details);
