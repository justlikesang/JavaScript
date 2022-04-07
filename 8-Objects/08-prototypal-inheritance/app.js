/* 
Prototypal Inheritance Model
Javascript uses prototypal inheritance model. That means that
every constructor function/class has a prototype property that
is shared by every instance of the constructor/class. So any
properties and methods or prototype can be accessed by every 
instance. prototype property returns an object.
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  // We're removing the method below since every instance of Account will
  // have this.deposit - where as it can be solved by using prototype
  // this.deposit = function (amount) {
  //   this.balance += amount;
  //   console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  // };
}

Account.prototype.bank = 'Chase';
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

const john = new Account('john', 200);
const bob = new Account('bob', 0);

console.log(john);

john.deposit(300);

// console.log(john);
// console.log(bob);

// console.log(Account.prototype);

function factoryTest(firstName, lastName) {
  this.first = firstName;
  this.last = lastName;
  // return {
  //   firstName,
  //   lastName,
  //   // doesItWork() {
  //   //   console.log('hello world');
  //   // },
  // };
}
const testOne = new factoryTest('sang', 'suh');

factoryTest.prototype.doesItWork = function (string) {
  console.log(`hello ${string}`);
}

testOne.doesItWork('world');

/*
function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  this.deposit = function (amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  };
}
const john = new Account('john', 200);
const bob = new Account('bob', 0);

// using deposit method without assigning a prototype
// when we have 1000+ customers for a bank, we'll be creating
// that many functions for the 'this.deposit' which is a waste of space

// john.deposit(1000);

console.log(Account.prototype);

// using prototype to assign the function which can be shared across all the instances
// we now save memory by having it at 'one' place in a sense rather than for each instances

Account.prototype.bank = 'CHASE';
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

john.deposit(300);
bob.deposit(1000);

function PersonalAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

const sang = new PersonalAccount('sang', 1000000000);

PersonalAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hi ${this.name} your balance added is ${this.balance}`);
  return this.balance;
};
PersonalAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
  console.log(`Hi ${this.name} your balance subtracted is ${this.balance}`);
};

sang.deposit(1000);
sang.withdraw(100000);
*/
