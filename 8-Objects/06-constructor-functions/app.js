// Blue Print
// Factory Functions and Constructor Functions
// Constructor Functions
// new - creates new object, points to it, omit return

// Constructor Function
// capitalized function name signal's a special case
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React`
    );
  };
  // console log of 'this' will point to window object without
  // the 'new' keyword
  console.log(this);
}

const john = new Person('john', 'anderson');
console.log(john);
john.fullName();

const bob = Person('bob', 'jordan');
/* console log without 'new' will return undefined,
 since we took out the new which omits return */
console.log(bob);
bob.fullName();

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love JS`
      );
    },
  };
}
