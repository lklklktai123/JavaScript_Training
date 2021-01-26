'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd'];
console.log(arr.slice(1));
console.log(arr.slice(-1));
console.log(arr);
console.log(arr);
let arr2 = arr.slice();
arr2.splice(-1);
console.log(arr2);

let arr3 = arr.slice();
arr3.reverse();
console.log(arr3);
// concac
let arr4 = arr3.concat(arr2);
console.log(arr4);
// join
console.log(arr4.pop());
console.log(arr4.shift());
console.log(arr4);
console.log(arr4.unshift('n'));
console.log(arr4.push('g'));

///////// for each
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function (movement, index, arr) {
  if (movement > 0) {
    console.log(`movement:${index + 1}    movement`);
  }
});
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${value} : ${key}`);
});
const movementsUnquie = new Set(movements);
console.log(movementsUnquie);
movementsUnquie.forEach(function (value, key, set) {
  console.log(value);
  console.log(key);
});
////////////////// APP
const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (value, index) {
    const type = value > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${value}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). For now, 
they are just interested in knowing whether a dog is an adult or a puppy.
 A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'),
 and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! 
So create a shallow copy of Julia's array, and remove the cat ages from that copied array
 (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") 
or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const checkDogs = function (arr1, arr2) {
  const arrJuliaNew = arr1.slice(1, -2);
  const arrDataDog = [...arrJuliaNew, ...arr2];
  return arrDataDog.map((value, index) => {
    const typeDog = value > 3 ? 'adult' : 'puppy';

    return `Dog number ${
      index + 1
    } is an ${typeDog}, and is ${value} years old`;
  });
};
const arrJulia = [3, 5, 2, 12, 7];
const arrKate = [4, 1, 15, 8, 3];
console.log(checkDogs(arrJulia, arrKate));
const map = movements.map((value, index) => value * 0.1);
console.log(map);
const user = 'Jessica Davis';
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .split(' ')
      .map(value => value[0].toLowerCase())
      .join('');
  });
};
const calcDisPlayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, value) => acc + value, 0);
  labelBalance.textContent = `${acc.balance} €`;
};
const calcDisPlaySumary = function (acc) {
  const incomes = acc.movements
    .filter(value => value > 0)
    .reduce((acc, value) => acc + value, 0);
  labelSumIn.textContent = `${incomes} €`;
  const out = acc.movements
    .filter(value => value < 0)
    .reduce((acc, value) => acc + value, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;
  const interest = acc.movements
    .filter(value => value > 0)
    .map(value => (value * acc.interestRate) / 100)
    .filter(value => value >= 1)
    .reduce((acc, value) => acc + value, 0);
  labelSumInterest.textContent = `${interest} €`;
};
const updateUi = function (currentAccount) {
  //Dis play movements
  displayMovement(currentAccount.movements);
  // Display balance
  calcDisPlayBalance(currentAccount);

  // Display summary
  calcDisPlaySumary(currentAccount);
};
// event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display message welcomel
    labelWelcome.textContent = `welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // clear input field
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    updateUi(currentAccount);
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiveAcc?.userName !== currentAccount.userName
  ) {
    receiveAcc.movements.push(amount);
    currentAccount.movement.push(`${-amount}`);
    updateUi(currentAccount);
  }
});
btnLoan.addEventListener('clcik', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(value => value >= amount * 0.1)
  ) {
    currentAccount.push(amount);
    updateUi(currentAccount);
  }
  inputLoanAmount.value = '';
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(inputClosePin.value);
  //if
  if (
    accounts.find(value => value.userName === inputCloseUsername.value) &&
    accounts.find(value => value.pin === Number(inputClosePin.value))
  ) {
    const index = accounts.findIndex(
      value => value.userName === inputCloseUsername.value
    );

    accounts.splice(index, 1);
  }
  console.log(accounts);
  containerApp.style.opacity = 0;
});
// filter
createUserName(accounts);
console.log(accounts);
const withdrawals = movements.filter(value => value < 0);
console.log(withdrawals);
// reduce
const balance = movements.reduce((acc, value, index, arr) => acc + value, 0);
console.log(balance);
// max
const max = movements.reduce((acc, value) => {
  console.log(`acc:${acc} value:${value}`);
  if (acc > value) {
    return acc;
  } else {
    return value;
  }
}, movements[0]);
console.log(max);
const min = movements.reduce((acc, value) => {
  if (acc < value) {
    return acc;
  } else {
    return value;
  }
}, movements[0]);
console.log(min);
const arrTb = [10, 10, 80, 100];
const tb = arrTb.reduce((acc, value) => acc + value, 0) / arrTb.length;
console.log(tb);
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, 
they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'),
 and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old,
 humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that
   are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges
   how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

*/
const data1 = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAge = function (data1) {
  //1
  const humanAge = data1.map(value =>
    value <= 2 ? 2 * value : 16 + value * 4
  );
  console.log(humanAge);
  const filterAge = humanAge.filter(value => value >= 18);
  console.log(filterAge);
  return filterAge.reduce((acc, value, i, arr) => acc + value / arr.length, 0);
};
console.log(data1);
console.log(calcAverageHumanAge(data1));

const totalDepositsUSD = movements
  .filter(value => value > 0)
  .map(value => value * 1.1)
  .reduce((acc, value) => acc + value);
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const calcAverageHumanAgeNew = function (data) {
  return data
    .map(value => (value <= 2 ? value * 2 : 16 + value * 4))
    .filter(value => value > 18)
    .reduce((acc, value, i, arr) => acc + value / arr.length, 0);
};
console.log(calcAverageHumanAgeNew([5, 2, 4, 1, 15, 8, 3]));
// find
const firstWithdrawal = movements.find(value => value < 0);
console.log(firstWithdrawal);
const acount = accounts.find(acc => acc.owner === 'Jonas Schmedtmann');
console.log(acount);
// incluse
const includes = movements.includes(-130);
const some = movements.some(value => value > 0);
console.log(includes, some);
//flat
const deep = [[[1, 2], 1], 1, 2, 3, [4, 5]];
console.log(deep.flat(1));
const overBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, amount) => acc + amount);
console.log(overBalance);
// flatmap
const overBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, amount) => acc + amount);
console.log(overBalance2);
//
const sort = [1, -3, -4, -5, 10];
//Ascending
// sort.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
sort.sort((a, b) => a - b);
console.log(sort);
//Desending
// sort.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
sort.sort((a, b) => b - a);
console.log(sort);

//
const arr5 = new Array(7);
console.log(arr5);
arr5.fill(5, 0, -2);
console.log(arr5);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
labelBalance.addEventListener('click', function () {
  const movementui = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementui);
});
///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion,
 and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 
10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, 
and for each dog, calculate the recommended food portion and add it to the object as a new property.
 Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. 
 (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: 
Some dogs have multiple owners, so you first need to find Sarah in the owners array, 
and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch')
 and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order 
(keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means:
 current > (recommended * 0.90) && current < (recommended * 1.10). 
 Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// cau1
dogs.forEach(
  value => (value.recommendedFood = Math.trunc(value.weight ** 0.75 * 28))
);
console.log(dogs);
// cau 2,3
dogs.forEach(value => {
  value.owners.includes('Sarah')
    ? console.log(
        `it's eating too  ${
          value.curFood > value.recommendedFood ? 'much' : 'little'
        }`
      )
    : '';
});
console.log(dogs);

const ownersEatTooMuch = dogs
  .filter(value => value.curFood > value.recommendedFood)
  .flatMap(value => value.owners);
const ownersEatTooLittle = dogs
  .filter(value => value.curFood < value.recommendedFood)
  .flatMap(value => value.owners);
console.log(ownersEatTooMuch, ownersEatTooLittle);
// cau
//Matilda and Alice and Bob's dogs eat too much!

const inforStatus = ownersEatTooMuch.join(' and ') + "'s dogs eat too much!";
console.log(inforStatus);
// cau 5
const ExactlyStatusEat = dogs.some(
  value => value.recommendedFood === value.curFood
);
const OkStatusEat = dogs.some(
  value =>
    value.recommendedFood + value.recommendedFood * 0.1 > value.curFood &&
    value.curFood > value.recommendedFood - value.recommendedFood * 0.1
);
console.log(ExactlyStatusEat, OkStatusEat);
//7
const containing = dogs.filter(
  value =>
    value.recommendedFood + value.recommendedFood * 0.1 > value.curFood &&
    value.curFood > value.recommendedFood - value.recommendedFood * 0.1
);
console.log(containing);
const shallow = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(shallow);
