// Hoisting
// function and var declarations are hoisted
// safer to access only after initialized


display();
moreComplex();
// console.log(firstName);  // ReferenceError for const
// console.log(lastName);   // ReferenceError for let
// console.log(random);     // undefined for var

const firstName = 'john';
let lastName = 'jordan';
var random = 'random';

function display() {
  console.log('hello world');
}

function moreComplex() {
  console.log(`${firstName}, ${lastName}, ${random}`);
}
