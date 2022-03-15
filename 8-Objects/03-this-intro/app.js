// this
// points to the left of the dot

const john = {
  firstName: 'john',
  lastName: 'anderson',
  fullName: function () {
    console.log(this);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

const bob = {
  firstName: 'bob',
  lastName: 'sanders',
  fullName: function () {
    console.log(this);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

john.fullName('John Anderson');
bob.fullName();
