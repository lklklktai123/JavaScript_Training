'use strict';
//function
// function declaration
function calAge1(birthDay) {
  const day = new Date();
  const year = day.getFullYear();
  return year - birthDay;
}
// function expression
const calAge2 = function (birthDay) {
  const day = new Date();
  const year = day.getFullYear();
  return year - birthDay;
};
const age1 = calAge1(1996);
const age2 = calAge2(1996);
console.log(age1, age2);
// Arrow function
const age3 = birthDay => {
  const day = new Date();
  const year = day.getFullYear();
  return year - birthDay;
};
const calAge3 = age3(2000);
console.log(calAge3);
//-----------------------------------------
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
// const checkWinner = function (avg1, avg2) {
//     if ((avg1 / avg2) >= 2) {
//         console.log(`KoaLas win with ( ${avg1} vs ${avg2})`)
//     } else if ((avg2 / avg1) >= 2) {
//         console.log(`KoaLas win with ( ${avg2} vs ${avg1})`)
//     } else {
//         console.log('No team win...')
//     }
// }
// const avgKoaLas = calcAverage(23, 34, 27)
// const avgDolphin = calcAverage(85, 54, 41)
// console.log(avgKoaLas, avgDolphin)
// checkWinner(avgKoaLas, avgDolphin)
// //array
// //literal syntax
// const friends = ['loi', 'hoa'];
// const friend2 = new Array('loi', 'hoa');
// console.log(friends, friend2);
// push them 1 phan tu vao cuoi mang
// friend2.push('truong');
// console.log(friend2);
//unshift them 1 phan tu vao dau mang
// friend2.unshift('thang');
// console.log(friend2);
// // remove array
// friend2.pop() // remove phan tu cuoi
// console.log(friend2);
// friend2.shift(); // remove phan tu dau tien
// console.log(friend2)
// friend2.push('tt')
// friend2.push('nn')
// console.log(friend2.indexOf('nn')) // check phan tu do co ko co thif tra ve vi tri khong thi tra ve -1
// console.log(friend2.includes('mm')) // check phan tu co trong mang hay khong co thi tra ve true
// khong thi tra ve false

/*
Steven is still building his tip calculator, using the same 
rules as before: Tip 15% of the bill if the bill value is between 50 and 300,
 and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above 
(you can check out the code from first tip calculator challenge if you need to). 
Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
// const calcTip = value => {
//     return value >= 50 && value <= 300 ? value * 0.15 : value * 0.2
// }
// const arrBill = [125, 555, 44]
// const tip = [calcTip(arrBill[0]), calcTip(arrBill[1]), calcTip(arrBill[2])]
// console.log(tip);
// const total = [arrBill[0] + tip[0], arrBill[1] + tip[1], arrBill[2] + tip[2]]
// console.log(total);
// // object
// const myBackground = {
//     fullName: 'Phan Nguyễn Thành Tài',
//     dateOfBirth: '19/01/1996',
//     location: 'Viet Nam',
//     myFriends: ['Hòa', 'Lợi', 'P6']
// }
// console.log(myBackground.fullName);
// console.log(myBackground['myFriends']);
// const interestedIn =
//     prompt('What do you want to know about Tai? Choose between fullName,dateOfBirth,location,myFrends')
// if (myBackground[interestedIn]) {
//     console.log(myBackground[interestedIn])
// } else {
//     console.log('Wrong request ! Choose between fullName, dateOfBirth, location, myFrends')
// }
// // object.key => nhan key từ object không phải là string
// // object['key'] => nhận key là string => có thể truyền chuỗi string vào
// // add object
// myBackground['email'] = 'thanhtailk96@gmail.com';
// myBackground.phone = '0965143263';
// console.log(myBackground);
// console.log(`${myBackground.fullName} has ${myBackground.myFriends.length}
//  friends, and his best friend is called ${myBackground['myFriends'][0]}`);
// const myBackground1 = {
//     fullName: 'Phan Nguyễn Thành Tài',
//     dateOfBirth: '1996',
//     location: 'Viet Nam',
//     driverLicense: true,
//     myFriends: ['Hòa', 'Lợi', 'P6'],
//     job: 'IT',
//     calAge: function () {
//         this.age = 2020 - this.dateOfBirth
//         return 2020 - this.dateOfBirth
//     },
//     isDriverLicense: function () {
//         return `${this.fullName} is a ${this.calAge()}-year old ${this.job}, and He has ${(this.driverLicense) ? 'a ' : ' not '}driver license`
//     }
// }
// console.log(myBackground1.age);
// console.log(myBackground1.isDriverLicense())
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height
 (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
// const mark = {
//     firtName: 'Mark',
//     lastname: 'Miller',
//     job: 'IT',
//     location: 'Viet Nam',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height
//         return this.bmi
//     },
// }
// const jonh = {
//     firtName: 'John',
//     lastname: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height
//         return this.bmi
//     }
// }
// jonh.calcBMI();
// mark.calcBMI();
// if (mark.bmi > jonh.bmi) {
//     console.log(`${mark.firtName + ' ' + mark.lastname}'s BMI (${mark.bmi}) is higher than ${jonh.firtName + ' ' + jonh.lastname}'s (${jonh.bmi})!`)
// } else {
//     console.log(`${jonh.firtName + ' ' + jonh.lastname}'s BMI (${jonh.bmi}) is higher than ${mark.firtName + ' ' + mark.lastname}'s (${mark.bmi})!`)
// }
/* for with continue or break
continue : thoát khỏi vòng i hiện tại để đến vòng i tiếp theo
break : chấm dứt tất cả vòng lặp
*/
// const mark = [
//     'Mark',
//     'Miller',
//     'IT',
//     'Viet Nam',
//     78,
//     1.69,
//     'a ha ha'
// ]
// for (let i = 0; i < mark.length; i++) {
//     if (typeof mark[i] !== 'string') continue;
//     console.log(mark[i])
// }
// console.log('----BREAK-----')
// for (let i = 0; i < mark.length; i++) {
//     if (typeof mark[i] === 'number') break;
//     console.log(mark[i])
// }
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const calcTip = value => {
  return value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
};
const tips = [];
const total = [];
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
const calcAverage = arr => {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
  }
  return avg / arr.length;
};
console.log(tips, total);
console.log(calcAverage(tips));
console.log(calcAverage(total));
console.log('tai');
//
