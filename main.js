// let arr = ["Travis", "Scott"];
// console.log([0]);
// console.log([1]);

// let name = arr[0];
// let lastName = [1];
// let [lastName, name] = arr;

// console.log(name);
// console.log(lastName);

// let songs = ["goosebumps", "antidote", "mafia", "wake up"];
// let [song1, , , song2] = songs;
// console.log(song1, song2);

// let songs = ["goosebumps", "antidote", "mafia", "wake up", "tkn"];
// let [item1, item2, ...rest] = songs;
// console.log(item1);
// console.log(item2);
// console.log(rest);

// let [one, two] = [12, 14];
// console.log(one);

// let albums = ["utopia", "astroworld", "rodeo"];
// console.log(albums[4]);

// ? значение по умолчанию

// let [elem1 = "laptop", elem2 = "phone"] = [];
// console.log(elem1, elem2);

// let [name, age = prompt("AGE")] = ["Tom", 23];
// console.log(name, age);

// ! подмена переменных

// let a = 1;
// let b = 2;

// let temp;
// temp = a;
// a = b;
// b = temp;

// [a, b] = [b, a];
// console.log(a, b);

// ! деструктуризация обьекта

// let artist = {
//     name: "Travis",
//     lastName: "Scott",
//     possition: "rapper",
//     status: 'alive',
// };
// // ? old method
// // let name = artist.name;
// // let lastName = artist.lastName;
// // let possition = artist.possition;
// // ? destructuring
// // ?перезаписываем ключи

// let  {
//     name: "Travis",
//     lastName: "Scott",
//     possition: "rapper",
//     status: 'alive',
// }= artist

// let { name: hisname, lastName: hislastName, possition: hispossition age } = artist;
// console.log(hisname, hislastName, hispossition);

// let { name = prompt("NAME"), age = prompt("AGE") } = {};
// console.log(name, age);

// let artist = {
//   name: "Travis",
//   lastName: "Scott",
//   possition: "rapper",
//   status: "alive",
// };
// let { name, ...rest } = artist;
// console.log(name);
// console.log(rest);

// ! деструктуризация строки

// let [str1, str2, str3, str4, str5] = "plus ultra";
// console.log(str1, str2, str3, str4, str5);

// let [str1, str2] = "plus ultra".split(" ");
// console.log(str1, str2);

// ! вложенные деструктуризация

// const person = {
//   name: {
//     first: "Playboi",
//     last: "Carti",
//   },
//   age: 25,
//   songs: ["Sky", "RIP", "Vamp Anthem"],
// };

// const {
//   name: { first, last },
//   age,
//   songs: [song1, song2, song3],
// } = person;
// console.log(first, last, age, song1, song2, song3);

// ! копирование обьектов

// let message = 'Hello';
// let phrase = message;

// let user = {
//   name: "Kendrick",
// };
// let person = user;

// // console.log(user);
// // console.log(person);

// console.log(user === person);// true
// console.log({} === {});// false

// ? spread operator поверхстное копирование

// let user = {
//   name: "Kendrick",
// };
// let human = { ...user };
// human.name = "Drake";
// console.log(human);
// console.log(user);

// ? глубокое копирование
// const car = {
//   mark: "BMW",
//   wheels: {
//     amount: 4,
//     type: "round",
//   },
// };
// let car2 = { ...car };
// console.log(car);
// car2.wheels.type = "squre";
// console.log(car2);

// ! JSON.parse JSON.stringify

// const car = {
//   mark: "BMW",
//   wheels: {
//     amount: 4,
//     type: "round",
//   },
//   sayMark: function () {
//     console.log(this.mark);
//   },
// };
// car.sayMark();

// let car2 = JSON.parse(JSON.stringify(car));
// car.wheels.type = "squre";
// console.log(car);
// console.log(car2);

//  ! spread

let arr = ["Hello", "bye", "good"];
let arr2 = [10, ...arr, 20];
console.log(arr2);

// ! rest параметры

// function f1(a, ...b) {
//   console.log(a);
//   console.log(b);
// }

// f1(11, 12, 34, 35, 77);

// let wizard = {
//   name: "Harry",
//   lastname: "Potter",
//   born: {
//     date: "31 July 1980",
//     country: "England",
//   },
//   friends: [
//     {
//       name: "Hermione",
//       age: 12,
//     },
//     {
//       name: "Ron",
//       age: 11,
//     },
//   ],
//   study: {
//     subjects: ["Charms", "History of Magic", "Flying"],
//   },
// };

// let {
//     name,
//     lastName
// born:
// }

let task3 = [
  "первый",
  "второй",
  "третий",
  "четвертый",
  "пятый",
  "шестой",
  "седьмой",
];

// let [, , , , , elem1, elem2] = task3;

// console.log(elem1, elem2);

// function func1(arr) {
//   let ret = [];
//   for (let i = 0; i < arr.length; i++) {
//     ret.push(arr[i] * arr[i]);
//   }
//   return ret;
//   let [a, ...b] = ret;
//   let firstNum = a;
//   console.log(a);
//   console.log(firstNum);
// }
// console.log(func1([2, 3, 4, 5]));

let human = { name: "Luck", age: "22" };
let { name, age, status = "alive" } = human;

console.log(name, age, status);
