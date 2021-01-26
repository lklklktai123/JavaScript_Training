'use strict';
// const data1 = 'data1';
// const first = function () {
//   let data2 = 'data2';
//   const second = function () {
//     let data3 = 'data3';
//     let data4 = `${data1 + data2 + data3}`;
//     const third = function () {
//       const check = 1;
//       if (check === 1) {
//         const data4 = 'data4';
//         console.log(data1 + data2 + data3 + data4);
//       }
//     };
//     third();
//   };
//   second();
// };

// first();
// rrrcheck(12);
// let rrrcheck = check => {
//   console.log(check);
// };
let checkThis = function () {
  return this;
};
//console.log(checkThis());

const expFs = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};
// console.log(expFs(5, 5, 10, 20));
let object1 = {
  name: 'tai',
  age: 24,
};
let v1 = {
  value: 10,
};
let v2 = {
  value: 10,
};
console.log(v1 === v2);
