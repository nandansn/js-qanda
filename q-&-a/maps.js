// In JavaScript, a Map is an object that stores a collection of key-value pairs, similar to an object. Unlike objects, however, maps allow any type of value to be used as a key, including objects, functions, and primitive values.

// dditionally, maps are ordered collections, so the order of items is preserved when you iterate over them. In contrast, objects do not guarantee any specific order.



const map = new Map();
map.set('name', 'John');
map.set('age', 30);

console.log(map.get('name')); // John
console.log(map.get('age')); // 30
console.log(map.size); // 2

// map.set(key, value): Adds a new key-value pair to the map, or updates an existing key with a new value.

// map.get(key): Returns the value associated with a given key. If the key is not found in the map, the method returns undefined.

// map.has(key): Returns a boolean indicating whether the map has an entry for the given key.

// map.delete(key): Removes the key-value pair with the given key from the map.

// map.clear(): Removes all key-value pairs from the map.

// map.size: A read-only property that returns the number of key-value pairs stored in the map.

// map.keys(): Returns a new Iterable object that contains all the keys of the map.

// map.values(): Returns a new Iterable object that contains all the values of the map.

// map.entries(): Returns a new Iterable object that contains arrays of [key, value] pairs for each entry in the map.

map = new Map();
map.set("name", "John");
map.set("age", 30);

console.log(map.has("name")); // true
console.log(map.get("age")); // 30

map.delete("name");
console.log(map.has("name")); // false

for (const key of map.keys()) {
  console.log(key); // age
}

for (const value of map.values()) {
  console.log(value); // 30
}

for (const [key, value] of map.entries()) {
  console.log(key, value); // age 30
}

