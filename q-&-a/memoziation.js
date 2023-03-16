// Memoization is an optimization technique in which we cache the function results. If we provide the same input again, we fetch the result from the cache instead of executing code that can cause a performance hit.

// In case the result is not cached, we would execute the function and cache the result. Let's take an example of finding the square of a number.

function findSquare() {
  let result = {};

  return (value) => {
    if (value in result) {
        console.log('pick from cahce');
      return result[value];
    } else {
      result[value] = value * value;
      return result[value]

    }
  };
}
let square = findSquare();
console.log(square(10));
console.log(square(10));
console.log(square(110));
console.log(square(10));
