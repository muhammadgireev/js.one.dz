let num = [];

const ArrayThreeNumericElements = [1, 2, 3];
const ArrayThreeStringElements = ["Gireev", "Muhammad", "Ahmadovich"];
const ArrayThreeStringThreeNumericElements = ["World", "Home", "Five"];

const arrayNamesAllYourClassmates = [
  "Adam",
  "Miki",
  "Ibrahim",
  "Muhammad",
  "Ilez",
  "Hasbulla",
  "Islam",
];

let arrayAllTypeData = [7, "GGG", null, undefined, true, false];

let ArrayWithThreeEmptyArray = [[], [], []];

const arrayTwoArraysInsideThreeNumbersInsideEachNestedArray = [
  [7, 4, 2],
  [8, 3, 21],
];

let characters = [
  "Рамси Болтон",
  "Тирион Ланнистер",
  "Станис Баратеон",
  "Теон Грейджой",
  "Эддард Старк",
  "Дайенерис Таргариен",
  "Джон Сноу",
];

const king = "Король Ночи",
  stupid = "Бран Старк";

characters[0] = king;
characters[1] = null;
characters[2] = "Станис Король";
characters[3] = stupid;
characters[4] = ["season", "01"];
characters[5] = king + ", " + stupid;
characters[6] = characters[0];

let arrayPush = [];
arrayPush.push(true);
console.log(arrayPush);

let arrayPush2 = [];
arrayPush2.push(1, 2, 3);
console.log(arrayPush2);

let arrayPush3 = [true, false];
arrayPush3.unshift(null);
console.log(arrayPush3);

let arrayPush4 = [[], []];
arrayPush4[1].push(true, true, true);
console.log(arrayPush4);

let arrayPush5 = ["html", "css"];
arrayPush5.unshift("git");
arrayPush5.push("javascript");
console.log(arrayPush5);

arrayPush5[arrayPush5.length] = "figma";
console.log(arrayPush5);

let arrayLast = [];

arrayLast.push("react");
console.log(arrayLast);

arrayLast[arrayLast.length] = "redux";
console.log(arrayLast);

arrayLast.unshift("git");
console.log(arrayLast);

console.log(
  `сначала мы изучим ${arrayLast[0]}, а в конце изучим ${arrayLast.slice(-1)}`
);

arrayLast.push("mysql", "mongodb");

console.log(arrayLast);
