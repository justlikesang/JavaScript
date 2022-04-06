/* All Objects in Javascript have access to constructor 
 property that returns a constructor function that created it */
// built in constructor functions
// arrays and functions are objects in javascript

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React`
    );
  };
}

const john = new Person('john', 'sanders');
console.log(john);
console.log(john.constructor); // logs function Person(firstName, lastName) {...}

const bob = {};
console.log(bob.constructor); // logs function Object() [native code]

const list = [];
console.log(list.constructor); // logs function Array() [native code]

const sayHi = function () {};
console.log(sayHi.constructor);

// we're borrowing john variable's constructor - which is a function Person()
// to set up a new instance
const susy = new john.constructor('susy', 'carpenter');
susy.fullName();

console.log(Object.constructor);

// const john = new Person('john', 'sanders');
// console.log(john.constructor);

// const bob = {};
// console.log(bob.constructor);
// const list = [];
// console.log(list.constructor);
// const sayHi = function () {};
// console.log(sayHi.constructor);

// const suzy = new john.constructor('suzy', 'carpenter');
// suzy.fullName();
