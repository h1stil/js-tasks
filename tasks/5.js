// 5.2
function readNumber() {
  let num;
  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));
  if (!num) return null;
  return +num;
}

function random(min, max) {
  return min + Math.random() * (max - min);
}

// 5.3
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
  return str.includes("viagra") || str.includes("XXX");
}

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

function extractCurrencyValue(str) {
  return Number(str.slice(1));
}

// 5.4

const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
styles.unshift("Рэп", "Регги");

function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("Введите число", 0);
    if (!value) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;
  for (let el of arr) {
    partialSum += el;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}

// 5.5
const camelize = (str) =>
  str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");

const filterRange = (arr, a, b) => arr.filter((item) => a <= item && item <= b);

const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    if (cur < a || cur > b) {
      arr.splice(i, 1);
      i--;
    }
  }
};

const arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

const copySorted = (arr) => arr.slice().sort();

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [vasya, petya, masha];

const names = users.map((item) => item.name);

const usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

const sortByAge = (arr) => arr.sort((a, b) => a.age - b.age);

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

const getAverageAge = (users) =>
  users.reduce((prev, user) => prev + user.age, 0) / users.length;

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];
new Set(strings);

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

const map = new Map();
map.set("name", "John");
const keys = Array.from(map.keys());
keys.push("more");

// 5.8

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();
readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[0]);
console.log("Read message 0: " + readMessages.has(messages[0]));
messages.shift();

let readMap = new WeakMap();
readMap.set(messages[0], new Date.now());

// 5.9
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

function count(obj) {
  return Object.keys(obj).length;
}

// 5.10
let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

function topSalary(salaries) {
  let max = 0;
  let maxName = null;
  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}

// 5.11
new Date(2012, 1, 20, 3, 12);

function getWeekDay(date) {
  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[date.getDay()];
}

function getLocalDay(date) {
  const day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}

function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

// 5.12
let userParse = {
  name: "Василий Иванович",
  age: 35,
};
JSON.parse(JSON.stringify(userParse));

const room = {
  number: 23,
};
const meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};
room.occupiedBy = meetup;
meetup.self = meetup;
console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return !key && value === meetup ? undefined : value;
  })
);
