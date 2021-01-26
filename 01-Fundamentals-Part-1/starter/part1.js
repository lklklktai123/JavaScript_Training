// const name = 'tai'
// const job = 'IT'
// const year = '2020'
// const dateOfBirth = '1996'
// //backticks
// const information = `I'm a ${name}
// a ${year - dateOfBirth} year old 
// I'm a ${job}`;
// console.log(information);
const age = 18
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log('Sara can start driving license ')
}
// type coversion
const year = '1996'
console.log(Number(year) + 24)
console.log('NAN ban chat type = number ,nhung no la mot so khong hop le')
// type coercion
console.log('I am ' + 23 + ' year old')
console.log('23' - '22')
console.log('23' > '22')
console.log('23' * '22')
console.log('23' / '22')
console.log('chuoi string ngoai tru phep cong deu co the tinh toan nhu number')
//falsy value: 0, '' , undefined, null ,NaN
console.log(Boolean('a'));
const favorite = prompt('What is your favorite number');
console.log(favorite);
const a = '12'
if (a !== 12) {
    console.log('right');
}
// logic operator

const avgDolphin = (96 + 108 + 50) / 3
const avgKoLas = (96 + 108 + 99) / 3
console.log(avgDolphin, avgKoLas)
if (avgDolphin > avgKoLas && avgDolphin >= 100) {
    console.log('avgDolphin win vs diem ' + avgDolphin)
} else if (avgDolphin < avgKoLas && avgKoLas >= 100) {
    console.log('avgKoLas win vs diem ' + avgKoLas)
}
else if (avgDolphin === avgKoLas && ((avgDolphin && avgKoLas) >= 100)) {
    console.log('hoa roi')

} else {
    console.log('ko ai thang')
}
//
const day = 'Tuesday'
switch (day) {
    case 'Monday':
        console.log('Monday')
        break;
    case 'Tuesday':
        console.log('hihi ko break nha')
    case 'Wednesday':
        console.log('Tuesday and Wednesday')
        break;
    default:
        console.log('eror !')
}
//ternary operator
const bill = 10
const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100
console.log(`The bill was ${bill},the tip was ${tip}, and the total value ${bill + tip} `)