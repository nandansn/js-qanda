let _profile = Symbol('profile');

class Person {
    constructor(name,age,salary) {
        this[_profile] = {
            name,
            age,
            salary
        }
    }

    getProfile() { return this[_profile] }
    

        
}


let nanda = new Person('nanda','34','10cr');


(function display() {
    console.log(nanda.getProfile());
})();