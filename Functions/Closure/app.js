// Closure
// -closure gives you an acess to an outer function's scope
// from an inner function
// -make private variables with closures

// Closure Part 1
/*
function outer() {
  let privateVar = 'secret';
  function inner() {
    console.log(`hello there secret is : ${privateVar}`);
  }
  return inner;
  inner();
}


const value = outer();
console.log(value); // logs inner function definition
value(); // logs 'hello there secret is : secret' 
*/

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  return showBalance;
}

newAccount('susan', 500)();

const john = newAccount('john', 300);
const bob = newAccount('bob', 1000);

john();
bob();
