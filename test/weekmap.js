const protected = new WeakMap();

let person = {
    key: 'person',
}

protected.set(person,{name:'nanda'})
console.log(protected.get(person));