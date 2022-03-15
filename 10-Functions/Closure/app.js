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

// Closure Part 2
// function newAccount(name, initialBalance) {
//   let balance = initialBalance;
//   function showBalance() {
//     console.log(`Hey ${name}, your balance is ${balance}`);
//   }
//   return showBalance;
// }

// newAccount('susan', 500)();

// const john = newAccount('john', 300);
// const bob = newAccount('bob', 1000);

// john();
// bob();

// Closure Part 3
function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (balance - amount < 0) {
      console.log(
        `Sorry ${name}, you cannot draw more than your balance ${balance}`
      );
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const john = newAccount('john', 300);
const bob = newAccount('bob', 1000);

john.showBalance();
bob.showBalance();
john.deposit(1000);
john.deposit(500);
john.withdraw(1900);
john.showBalance();