'use strict';

const bookings = [];
const createBooking = function (a = 1, b = 2, c = 10 * b) {
  const booking = {
    a,
    b,
    c,
  };
  console.log(booking);
};
createBooking(1, 10, 2);
createBooking(1, undefined, 2);
//
const flight = 'LH234';
const tai = {
  name: 'Tai Phan',
  passport: 14130107,
};
const checkIn = function (flightNumber, passenger) {
  flightNumber = 'LH333';
  passenger.passport = 272423126;
  return [flightNumber, Object.values(passenger)];
};
const [flight1, [t1, t2]] = checkIn(flight, tai);
console.log(flight1, t1, t2);
const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};
const transformer = function (str, fn) {
  console.log(`Original str: ${str}`);
  console.log(`Tranformers str: ${fn(str)}`);
};
transformer('Java script is the best!', upperFirstWord);
//return fuction
const greet = greeting => name => console.log(`${greeting} ${name}`);
greet('Hey')('Tai');
const lufthansa = {
  airline: 'lufthansa',
  iatacode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push(`${this.iatacode} ${flightNum}`);
  },
};
lufthansa.book(234, 'Tai');
const eurowings = {
  airline: 'eurowings',
  iatacode: 'LH',
  bookings: [],
};
const book = lufthansa.book;
//call method
book.call(eurowings, '555', 'Tai version2');
console.log(eurowings);
// apply method
const flightData = [666, 'Tai version3'];
book.apply(eurowings, flightData);
console.log(eurowings);
// bind
const bookEuroWings = book.bind(eurowings, 777);
bookEuroWings('ahihi');
console.log(eurowings);
// with event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.plane++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// Partial application
const addTax = (value, tax) => value + value * tax;
console.log(addTax(10, 20));
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVat2 = addTaxRate(0.23)(100);
console.log(addVat2);
const addTaxRateArrow = rate => value => value + value * rate;
console.log(addTaxRateArrow(0.1)(100));
// chalenger 1
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, 
  increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number 
  makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //answer
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options[0]} ${this.options[1]}\n ${this.options[2]}\n ${this.options[3]}\n (Write option number)`
      )
    );
    typeof answer === 'number' &&
      answer <= this.options.length &&
      this.answers[answer]++;
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type == 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(this.answers.join(', '));
    }
  },
};
console.log(poll);
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: [1, 2, 3, 4, 5] }, 'string');
// Immediately Invoked Function Expressions(IIFE);
(function () {
  const a = 10;
  console.log(a);
})();
(() => console.log('heloo hihihi'))();
// closure
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passangers`);
  };
};
//Example one
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
// Re-assinging f function
h();
f();
console.dir(f);
const perGroup = 1000;
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passenger`);
    console.log(`There are 3 groups each with ${perGroup} passenger`);
  }, wait * 1000);
  console.log(`will start boarding in ${perGroup} seconds`);
};
boardPassenger(180, 3);
console.dir(boardPassenger);
