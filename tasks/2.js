// 2.1
alert("Я JavaScript");

// 2.4

let admin;
let name = "Джон";
admin = name;
console.log(admin);

const ourPlanet = "Земля";
const currentUserName = "Джон";

// 2.6

let userName = prompt("Ваше имя?", "");
console.log(userName);

// 2.8
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

console.log(Number(a) + Number(b));

// 2.11
if (age >= 14 && age <= 90) {
}
if (age < 14 || age > 90) {
}

// 2.13
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

let num;
do {
  num = prompt("Введите число больше 100", 0);
} while (num <= 100 && num);

const n = 10;
for (let i = 1; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j < i) {
      break;
    } else if (j === i) {
      console.log(i);
    }
  }
}

// 2.14
if (browser === "Edge") {
  console.log("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}

const number = +prompt("Введите число между 0 и 3", "");

switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;

  case 1:
    alert("Вы ввели число 1");
    break;

  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
    break;
}

// 2.15
const checkAge1 = (age) => (age > 18 ? true : confirm("Родители разрешили?"));
const checkAge2 = (age) => age > 18 || confirm("Родители разрешили?");

const min = (a, b) => (a < b ? a : b);

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

ask(
  "Вы согласны?",
  () => console.log("Вы согласились."),
  () => console.log("Вы отменили выполнение.")
);
