// call - runs instantly, arguments - list of items
// apply - runs instantly, arguments - array of items
// bind - assign, use later, arguments - list of items

const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const btn = document.querySelector('.increment');

// btn.addEventListener('click', function () {
//   counter.increment();
// });

// this will not work
// btn.addEventListener('click', counter.increment);

// some edge cases
// btn.addEventListener('click', counter.increment.bind(counter));

const increment = counter.increment.bind(counter);
btn.addEventListener('click', increment);
btn.removeEventListener('click', increment);
