const protectedScope = new WeakMap();

class MyClass {
  constructor() {
    protectedScope.set(this, { privateData: "some private data" });
  }

  getPrivateData() {
    return protectedScope.get(this).privateData;
  }
}

class Child extends MyClass { 
    constructor() {
        super();
    }
}

const myObj = new MyClass();
console.log(myObj.getPrivateData()); // "some private data"
console.log(protectedScope.get(myObj)); // undefined
