"use strict";
const weeks = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weeks[0]]: {
    open: 12,
    close: 22,
  },
  [weeks[1]]: {
    open: 11,
    close: 23,
  },
  [weeks[2]]: {
    open: 11,
    close: 23,
  },
  [weeks[3]]: {
    open: 11,
    close: 23,
  },
  [weeks[4]]: {
    open: 11,
    close: 23,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDilivery({
    starterIndex = 1,
    mainIndex = 0,
    time = "2h 30 phut pm ",
    adress = "219/46 htt",
  }) {
    console.log(
      `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },
  openingHours,
};
console.log(restaurant);
restaurant.orderDilivery({
  starterIndex: 0,
  mainIndex: 1,
  adress: "119/46A Nguyen Hong Dao",
  time: "20h 20 PM",
});
let [main, , , secondary] = restaurant.categories;
[secondary, main] = [main, secondary];
console.log(main, secondary);
// destructuring cho mang khong long nhau
const [starter, mainCours] = restaurant.order(0, 2);
console.log(starter, mainCours);
// detructuring cho mang long
const nested = [1, 2, [3, 4]];
console.log("aaaaa");
const [i, , [j, k]] = nested;
console.log(i, j, k);
// default value for array
let [p = 1, n = 1, m = 1] = [8, 9];
console.log(p, n, m);
// detructuring cho object
//cach 1
const { name, categories, openingHourss } = restaurant;
console.log(name, categories, openingHours);
//cach 2 doi ten bien
const {
  name: nameRestaurant,
  categories: tags,
  openingHours: hours,
} = restaurant;
console.log(nameRestaurant, tags, hours);
//default value for object
const { menu: menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
//multating varible
let a = 10,
  b = 20;
const obj = { a: 1, b: 2, c: 3 };
({ a, b } = obj);
console.log(a, b);
// nested object
const {
  fri: { open: mo, close: dong },
} = openingHours;
console.log(mo, dong);
// operator spread
const arr = [7, 8, 9];
const newArr = [4, 5, 6, ...arr];
console.log(...newArr);
// coppy array
const mainMenuCopy = [...restaurant.starterMenu];
//join 2 array
const menuJoin = [...mainMenuCopy, ...restaurant.mainMenu];
console.log(menuJoin);
let firstName = "Phan Nguyen Thanh Tai";
const revertName = [...firstName.replace(/[^a-zA-Z0-9]/g, "")];
console.log(revertName);
// spread for object
const newObject = { newAddress: "tt aa bb", ...restaurant };
console.log(newObject);
// SPREAD because right side of =
const newSpread = [1, 2, 3, ...[4, 5]];
// REST because left side of =
const [t1, t2, ...other] = [1, 2, 3, 4, 5, 6, 7];
console.log(newSpread, t1, t2, other);
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//  Detructuring object for rest
const { sat: saturday, ...weekdays } = restaurant.openingHours;
console.log(saturday, weekdays);
// function
const fax = function (...numbers) {
  let sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
console.log(fax(...[1, 2, 3, 4, 5]));
//short-ciruiting for or
restaurant.numGuest = 1;
let guest1 = restaurant.numGuest || "khong co khach";
console.log(guest1);
//short-ciruiting for or
//console.log(Boolean(checkGuest));
let guest2 = restaurant.numGuest && "co khach";
console.log(guest2);
// nullish with null or undefined not 0 ,O for falsy
const guest3 = restaurant.numGuest ?? "khong co khach";
console.log(guest3);
// chalenger1
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: [
    "Lewandowski",
    "Gnarby",
    "Gnarby",
    "Gnarby",
    "Lewandowski",
    "Hummels",
  ],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with 
the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array
 ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') 
containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and
 prints each of them to the console, along with the number of goals that were scored in total 
 (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, 
WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// cau1
const [players1, players2] = game.players;
console.log(players1, players2);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
const printGoals = function (...players) {
  let numberGoal;
  for (let i = 0; i < players.length; i++) {
    numberGoal = 0;
    for (let j = 0; j < game.scored.length; j++) {
      players[i] === game.scored[j] ? (numberGoal += 1) : (numberGoal += 0);
    }
    console.log(`${players[i]} have ${numberGoal} goal`);
  }
};
console.log(players2);
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
console.log("-------------------");
printGoals(...players1);
console.log(team1 || team2);
team1 > team2 && console.log("team2 win");
team1 < team2 && console.log("team1 win");
// for off có thể sử dụng continute and break
const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const [i, el] of menu1.entries()) {
  console.log(`${i + 1} : ${el}`);
}
// operator ?
console.log("-----------------OPERATOR ?---------------");
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} ,we open at ${open}`);
}
// properties for object
const properties = Object.keys(restaurant.openingHours);
for (const key of properties) {
  console.log(key);
}
//proerties for value
const propertiesValue = Object.values(restaurant.openingHours);
console.log(propertiesValue);
// Entrie Object
const entrieObject = Object.entries(restaurant.openingHours);
console.log(entrieObject);
for (const [key, { open, close }] of entrieObject) {
  console.log(key, open, close);
}

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number 
(Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
//cau1
for (const [key, value] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(key) + 1}: ${value}`);
}
const calculate = function (object) {
  let sum = 0;
  const convertObject = Object.values(object);
  for (const key of convertObject) {
    sum += key;
  }
  return sum / convertObject.length;
};
// cau 2
console.log(calculate(game.odds));
// cau 3
for (const [key, value] of Object.entries(game.odds)) {
  const strTeam = key === "x" ? "draw" : `vistory ${game[key]}`;
  console.log(`Odd of  ${strTeam} ${value}`);
}
const scorers = {};
for (const players of game.scored) {
  scorers[players] ? scorers[players]++ : (scorers[players] = 1);
}
console.log(scorers);
// SET
const orderSet = new Set([
  "pizza",
  "pizza",
  "hotdog",
  "noodble",
  "bread",
  "bread",
]);
console.log(orderSet.size);
// check  item Yes or No ?
console.log(orderSet.has("pizza"));
// add item
orderSet.add("chocolate");
console.log(orderSet);
// delete
orderSet.delete("chocolate");
console.log(orderSet);
for (const item of orderSet) console.log(item);
const arrJob = [
  "teacher",
  "teacher",
  "students",
  "manager",
  "manager",
  "doctor",
  "nurse",
];
const arrJobUnique = [...new Set(arrJob)];
console.log(arrJobUnique);

// Map
const rest = new Map();
rest.set("name", "Phan Nguyen Thanh Tai");
rest.set("true", "He is handsome");
rest.set("false", "he is badly");
rest.set("list friend", game.team1);
console.log(rest.get("list friend"));
// check item yes or no ?
rest.has("name");
// delte item from map
rest.delete("name");
// check size map
rest.size;
// clear map : rest.clear()
// key can array or object ,vv
const arrMap = [1, 2];
rest.set(arrMap, "check array key");
console.log(rest);

const question = new Map([
  ["title", "Cau hoi ve tai"],
  ["Cau1", "Tai handsome Ok ?"],
  [1, "Co"],
  [2, "K co"],
  ["Correct", 1],
  [true, "Congratulation!"],
  [false, "Very Bad !"],
]);
console.log(question);
for (const [key, value] of question) {
  console.log(key, value);
}
// const answer = Number(prompt("Your answer"));
// alert(question.get(answer === question.get("Correct")));
// chalenger 3
/* 
Let's continue with our football betting app! This time,
 we have a map with a log of the events that happened during the game. 
 The values are the events themselves, and the keys are the minutes 
 in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
const time = [...gameEvents.keys()].pop();
// tg trung binh cua su kien
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
// 4
for (const [min, value] of gameEvents) {
  const status = min > 45 ? "SECOND" : "FIRST";
  console.log(`[${status} HALF] ${min}: ${value}`);
}
// string
const airPlain = "Hello I am airpline";
console.log(airPlain[0]);
console.log(airPlain.indexOf("l"));
console.log(airPlain.lastIndexOf("l"));
console.log("splice 1", airPlain.slice(1));
console.log(airPlain.slice(airPlain.lastIndexOf(" ")));
console.log(airPlain.slice(airPlain.indexOf(" ")));
console.log("slice 0 -1", airPlain.slice(0, -1));
console.log(airPlain.toUpperCase());
console.log(airPlain.toLowerCase());
const tai = "tAi";
const taiLower = tai.toLowerCase();
const taiCorrect = taiLower[0].toUpperCase() + taiLower.slice(1);
console.log(taiCorrect);
const email = " ThanhtaiLk96@gmail.com  ";
//trim xoa khoang trang
const emailLower = email.toLowerCase().trim();
console.log(emailLower);
// replace
let rice = "35000000vnd";
let rice2 = rice.replace("vnd", "$").replace("000", ".000.");
console.log(rice2);
const rice3 = "35 000 000 000 000";
console.log(rice3.replace(/ /g, "").replace(/000/g, "000."));
// incluse ,endsWith and startsWith
const fullName = "Tai Phan";
// console.log(fullName.includes("h"));
// console.log(fullName.startsWith(" ", 4));
// console.log(fullName.endsWith("i", fullName.length));
// split
const [first, lastName] = fullName.split(" ");
console.log(first, lastName);
const newName = ["Mr.", first, lastName].join("-");
console.log(newName);

const capitalizeName = " Phan nGuyEn ThaHh tAi";
const conVertCapitalizeName = function (name) {
  let names = name.toLowerCase().split(" ");
  console.log(names);
  const nameUpper = [];
  for (const n of names) {
    //nameUpper.push((n[0]?.toUpperCase() ?? "") + n.slice(1));//c1
    nameUpper.push(n.replace(n[0], n[0]?.toUpperCase()));
  }
  return nameUpper.join(" ");
};
console.log(conVertCapitalizeName(capitalizeName));
// const tt = " ";
// console.log(tt.toUpperCase());
// padding
console.log(
  conVertCapitalizeName(capitalizeName)
    .padStart(conVertCapitalizeName(capitalizeName).length + 10, "-")
    .padEnd(conVertCapitalizeName(capitalizeName).length + 20, "-")
);
const maskCrediskCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);

  console.log(last.padStart(str.length, "*"));
};
maskCrediskCard(12345657898456);
//repeat
const repeat = "repeat";
console.log(repeat.repeat(5));
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const arrText = text.toLowerCase().split("\n");
  let arrTextConfig = "";
  let uperCaseText = "";
  let configText = "";
  for (const [i, value] of arrText.entries()) {
    arrTextConfig = value.trim().split("_");
    uperCaseText = arrTextConfig[1];
    configText =
      arrTextConfig[0] +
      uperCaseText.replace(uperCaseText[0], uperCaseText[0].toUpperCase());
    console.log(configText.padEnd(20), "✅".repeat(i + 1));
  }
});

//
