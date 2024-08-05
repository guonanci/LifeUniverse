function Person() {}
let person = new Person()
person.__proto__ === Person.prototype // equivalent to below
Object.getPrototypeOf(person) === Person.prototype // es5
Person.prototype.constructor === Person