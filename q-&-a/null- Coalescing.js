// The null coalescing operator (??) is a feature introduced in JavaScript ES2020 that provides a concise way to handle null or undefined values. It allows you to assign a default value to a variable if it's null or undefined.

function isNullOrUndefined(name) {
  return name ?? "no name";
}

console.log(isNullOrUndefined(""));
