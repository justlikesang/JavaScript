// Blue Print
// Factory functions and Constructor Functions
// Factory function

// const john = {
//   firstName: 'john',
//   lastName: 'anderson',
//   fullName: function () {
//     console.log(this);
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

// const bob = {
//   firstName: 'bob',
//   lastName: 'sanders',
//   fullName: function () {
//     console.log(this);
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
  };
}

const john = createPerson('john', 'anderson');
john.fullName();
const susy = createPerson('susy', 'apple');
susy.fullName();
const bob = createPerson('bob', 'jordan');
bob.fullName();

// example of Factory function

// function createPerson(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function () {
//       console.log(
//         `My full name is ${this.firstName} ${this.lastName} and I love JS`
//       );
//     },
//   };
// }

// const john = createPerson('john', 'anderson');
// john.fullName();
// const suzy = createPerson('suzy', 'apple');
// suzy.fullName();
// const bob = createPerson('bob', 'jordan');
// bob.fullName();
