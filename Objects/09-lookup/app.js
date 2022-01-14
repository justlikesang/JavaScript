/*
Property Lookup
If child does not have ask parent
Everything in JS is an Object
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  this.bank = 'Bank Of America'
}
const john = new Account('john', 200);
const bob = new Account('bob', 0);

// using deposit method without assigning a prototype
/* when we have 1000+ customers for a bank, we'll be creating
 that many functions for the 'this.deposit' which is a waste of space */

// john.deposit(1000);

// console.log(Account.prototype);

// using prototype to assign the function which can be shared across all the instances
/* we now save memory by having it at 'one' place in a sense rather than for each instances */

Account.prototype.bank = 'CHASE';
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

// console.log(john.bank);
console.log(bob);
console.log({});
console.log([]);