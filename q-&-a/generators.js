// JavaScript Generators are functions that can be paused and resumed multiple times, allowing you to generate a sequence of values over time. Generators are created using the function* syntax, and use the yield keyword to pause execution and return a value. When the generator is called again, it resumes execution from where it left off, and can continue to yield values until it reaches the end of its code.

function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

const fib = fibonacci();
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5
