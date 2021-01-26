// 'use strict';

// const Person = function (firstname, lastname, dateofbirth) {
//   firstname = 'aaaaaa';
//   this.lastname = lastname;
//   this.dateofbirth = dateofbirth;
// };
// Person.prototype.calAge = function () {
//   console.log(`I ${2021 - this.dateofbirth} years old `);
// };
// const tai = new Person('tai', 'phan', 1996);
// // console.log(tai);
// // // prototype
// // console.log(Person.prototype);
// // Person.prototype.calAge = function () {
// //   console.log(2021 - this.dateofbirth);
// // };
// // tai.calAge();
// Person.prototype.phone = '0965143263';
// console.log(tai.phone);
// console.log(tai.__proto__);

// // class
// const PersonCl = class {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   calAge() {
//     console.log(this.firstname + ' ' + this.lastname);
//   }
//   set setName(name) {
//     this.firstname = name;
//   }
// };
// const tai1 = new PersonCl('Tai', 'P han');
// console.log(tai1);
// tai1.calAge();
// tai1.setName = 'aaaa';
// console.log(tai1);

// const Student = function (firstname, lastname, dateofbirth, phone) {
//   Person.call(this, firstname, lastname, dateofbirth);
//   this.phone = phone;
// };
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log('Hello My name is ' + this.firstname);
// };
// const taiCon = new Student('tai', 'phan', 1996, '0965143263');
// taiCon.introduce();
// taiCon.calAge();

// ///////// Object crerate

// const Course = {
//   init(courseName, acount) {
//     this.courseName = courseName;
//     this.acount = acount;
//   },
//   welcome() {
//     console.log(
//       `welcome to class ${this.courseName},class have ${acount} students`
//     );
//   },
// };
// Course.init('12A3', 40);
// const Student1 = Object.create(Course);
// Student1.init = function (courseName, acount, studentName, hobbie) {
//   Course.init.call(this, courseName, acount);
//   this.studentName = studentName;
//   this.hobbie = hobbie;
// };
// const vi = Object.create(Student1);
// vi.init(Course.courseName, Course.acount, 'Nguyen Le Lan Vi', 'Tai');
// console.log(vi);

// // private and public field and method
// const Acount = class {
//   locate = navigator.language;
//   #movements = [];
//   #pin;
//   aa = 11111;
//   constructor(name, pin) {
//     this.name = name;
//     this.#pin = pin;
//   }
//   get getMovements() {
//     return this.#movements;
//   }
//   set setMovements(value) {
//     this.#movements.push(value);
//   }
//   recharge(value) {
//     this.#movements.push(value);
//     console.log(this);
//     return this;
//   }
// };
// const accTai = new Acount('Phan Nguyen Thanh Tai', 1111);
// accTai.recharge(120).recharge(130);
// console.log(accTai.getMovements);
// // Coding Challenge #1
// const test = {
//   aa: 111111,
// };
// const b = accTai.aa;
// console.log(b);

// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */
// const Car = function (speed) {
//   this.speed = speed;
// };
// const car1 = new Car(120);
// Car.prototype.accelerate = function () {
//   return console.log((this.speed += 10));
// };
// Car.prototype.brake = function () {
//   return console.log((this.speed -= 5));
// };
// car1.accelerate();
// car1.brake();
// Car.prototype.detail = function () {
//   return `going at ${this.speed} km/h`;
// };
// console.log(car1.detail());

// //challenger 2
// /*
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value,
//    by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀
// */
// const carEs6 = class {
//   constructor(speed) {
//     this.speed = speed;
//   }
//   accelerate() {
//     return console.log((this.speed += 10));
//   }
//   brake() {
//     return console.log((this.speed -= 5));
//   }
//   get speedUS() {
//     return `'Ford' going at ${this.speed / 1.6} mi/h`;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// };
// const car3 = new carEs6(120);
// console.log(car3);
// car3.accelerate();
// car3.brake();
// car3.speedUS = 120;
// console.log(car3);
// car3.accelerate();
// car3.accelerate();
// car3.speedUS = car3.speed;
// console.log(car3);
// /*
// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car.
//  Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%.
// Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%).
// Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀
// */
// const EV = function (speed, charge) {
//   Car.call(this, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%'`
//   );
// };
// const tesLa = new EV(120, 23);

// tesLa.accelerate();
// tesLa.brake();

// // Coding Challenge #4

// /*
// 1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
// 2. Make the 'charge' property private;
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

// DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀
// */
class NewCars {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  accelerate() {
    console.log((this.speed += 10));
    return this;
  }
  brake() {
    return console.log((this.speed -= 5));
  }
  // get speedUS() {
  //   return `'Ford' going at ${this.speed / 1.6} mi/h`;
  // }
  // set speedUS(speed) {
  //   this.speed = speed * 1.6;
  // }
}
class EVEs6 extends NewCars {
  #charge;
  constructor(name, speed, charge) {
    super(name, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    return this;
  }
  // brake() {
  //   this.speed -= 10;
  //   return this;
  // }
  get getCharge() {
    return this.#charge;
  }
}
const car4 = new EVEs6('Rivian', 120, 23);
car4.brake();
class Person {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  description() {
    console.log(this.name + ' ' + this.year);
  }
}
class Student extends Person {
  constructor(name, year, job) {
    super(name, year);
    this.job = job;
  }
}
const tada = new Student('Phan Nguyen Thanh Tai', '2021', 'That nghiep');
tada.description();
console.log(tada.__proto__);
const findIndex = [1, 2, 3, 4, 5];
console.log(findIndex.lastIndexOf(value => value > 3));
