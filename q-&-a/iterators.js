// 'Iterators are objects that implement the next() method, which is used to retrieve the next value in a sequence. Generators are automatically iterators, but any object that implements the next() method can be used as an iterato

// To implement an iterator for an object in JavaScript, you need to define an object with a next() method, which returns the next value in the sequence. The next() method should return an object with two properties: value and done. The value property is the next value in the sequence, and the done property is a boolean indicating whether there are more values in the sequence.


const squares = {
  [Symbol.iterator]: function () {
    let n = 1;
    return {
      next: function () {
        return {
          value: n * n,
          done: n++ > 3
        };
      }
    };
  }
};

for (const square of squares) {
  console.log(square);
}
// Output: 1, 4, 9, 16
