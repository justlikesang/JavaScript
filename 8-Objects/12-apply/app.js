// call - runs instantly, arguments - list of items
// apply = runs instantly, arguments - array of items
const john = {
  name: 'john',
  age: 24,
};

const susan = {
  name: 'susan',
  age: 21,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Hello, I'm ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}`
  );
}
// Call
// first argument points to the object, 2nd and 3rd points
// to the parameter for greet function
// greet.call(john, 'san diego', 'us');
// greet.call(susan, 'san diego', 'us');
// greet.call({ name: 'peter', age: 30 }, 'san diego', 'us');

// Apply
greet.apply(john, ['san diego', 'us']);
greet.apply(susan, ['san diego', 'us']);
greet.apply({ name: 'peter', age: 30 }, ['san diego', 'us']);
