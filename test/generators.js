function* generatePassword() {
  let prev = 0;
  let current = 1000;
  console.log("outer");
  while (current < 6000) {
    prev = current;
    current = prev + current;
    console.log("called");
    yield current;
  }
}

// for (let index = 0; index < 20; index++) {
//    console.log(generatePassword().next());

// }

const pwd = generatePassword();

console.log(pwd.next());

console.log(pwd.next());

console.log(pwd.next());

console.log(pwd.next()); // will return undefined
