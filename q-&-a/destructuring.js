// Destructuring is a JavaScript feature that allows you to extract values from arrays, objects, and maps and assign them to variables. It's a concise way to extract values from an array or an object and store them in variables with the same or different names.

// array

let [day, day2, day3, day4, day5, day6, day7] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

console.log(day, day2, day3, day4, day5, day6,day7);


// object 

let person = {name: 'John', age:34, address : { city: 'indiana', country: 'united States'}}


let {name, age, address:{city,country}} = person;


console.log(name,age,city,country);
