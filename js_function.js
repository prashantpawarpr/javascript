//!Break class
class car {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }
  tday() {
    return Date();
  }
}
const myCar = new car("hyundai", "hyundai");
console.log(myCar.tday());
//!Break closure
// const printa = (function () {
//   let a = 0;
//   return function () {
//     a += 1;
//     return a;
//   };
// })();
// console.log(printa());
// console.log(printa());
// const add = (function () {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();
// console.log(add());
// console.log(add());
// console.log(add());

// function outter() {
//   let name = "prashant";
//   function inner() {
//     console.log(name);
//   }
//   return inner();
// }
// outter();
//!Break bind
// const obj = {
//   name: "prashant",
//   lastName: "pawar",
//   callfun: function (...a) {
//     for (let ar of a) {
//       console.log(ar);
//     }
//     console.log(this.name, this.lastName);
//   },
// };
// const test = {
//   name: "pihu",
//   lastName: "parmar",
// };
// let output = obj.callfun.apply("", [1, 2, 3, 4, 4]);

//!Break Apply
// const obj = {
//   add: function (...args) {
//     let addi = 0;

//     for (let arg of args) {
//       console.log(arg);
//       addi += arg;
//     }
//     return addi;
//   },
// };
// const person_name = {
//   name: "prashant",
//   lastname: "pawar",
// };
// let addition = obj.add.apply(person_name, [12, 12, 33, 13]);
// let max = Math.max.apply("", [12, 12, 13]);
// console.log(addition);
// console.log(max);

//! Break call , Apply , Bind
// const obj = {
//   name: "prashant",
//   lastname: "pawar",
//   conct: function () {
//     return this.name + this.lastname;
//   },
// };
// const obj_name = {
//   name: "prashant",
//   lastname: "pawar",
// };
// const obj_lastname = {
//   name: "pawar",
//   lastname: "prashant",
// };
// let full_name = obj.conct("a, b", "c");
// console.log(full_name);
// let full_name2 = obj.conct.call(obj_name);
// console.log(full_name2);
// let full_name3 = obj.conct.call(obj_lastname);
// console.log(full_name3);
// //? the call() with an argument
// const objcall = {
//   add: function (c, d) {
//     console.log("the multiplication of ", c, "*", d, "is = ");
//     return this.a * this.b;
//   },
// };
// const obj_value = {
//   a: 12,
//   b: 12,
// };
// const obj_value2 = {
//   a: 12,
//   b: 13,
// };
// let addvalue = objcall.add.call(obj_value, 12, 12);
// console.log(addvalue);

//!Break argument, parameter rest parameter, object arguments
//parameter is written is statement in the function (a,b,c), where a ,b ,c is parameter
//arguments are the value passed to the function when any method is invoked
//e.g (12,3) here 12,3 are arguments
//rest parameter is functionality of javascript where it can take any number of arguments without defining in function e.g function add(...args) and add(1,2,3,4,5,6,4) it will still work . the rest parameter ...args is iterable and can be accessed via for...of loop
// argument objects
//? all the example of above definition is given below
// function add(...args) {
//   let sum = 0;
//   console.log(arguments.length);
//   for (let arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// let sum = add(1, 2, 3, 12, 1, 2, 12);
// console.log(sum);
//!Break self   function definition
// const a = function (a, b) {
//   console.log(arguments.length);
// };
// console.log(typeof a);
// a(1, 2);
// let text = a.toString();
// console.log(text);

// (() => {
//   console.log("hello world");2
// })();
// const myFunction = new Function("a", "b", "return a*b");
// let x = myFunction(4, 3);
// console.log(x);
// function age(a) {
//   if (a > 18) {
//     console.log("you are adult");
//   } else {
//     console.log("you are not adult");
//   }
// }
// age(12);
// const mul = function (a, b) {
//   console.log(a * b);
// };
// mul(12, 2);
// const add = () => {
//   return "arrow function";
// };
// console.log(add());
// let arrow_fn = add();
// console.log(arrow_fn);

//!Break self invoking function
// let a = 23;
// (function name(a = "hello world") {
//   console.log(a);
// })(a);

//!Break object.values

// const person = {
//   name: "prashant",
//   lastName: "pawar",
//   age: 27,

// };

// const array_person = Object.values(person);
// console.log(array_person);
// for (let x of array_person) {
//   console.log(x);
// }
// for (let x in person) {
//   console.log(person[x]);
// }
// const string_person = JSON.stringify(person);
// console.log(string_person);
// for (let x in string_person) {
//   console.log(string_person[x]);
// }

//! Break
// let p, r, n;
// let ci;
// p = 500000;
// r = 12;
// n = 12;
// ci = (p * r * Math.pow(1 + r, n)) / Math.pow(1 + r, n - 1);
// console.log(ci);
// console.log(Math.pow);

//P x R x (1+R) ^N / [(1+R)^N-1]
//!Break JSON
// let text =
//   '{ "employees" : [' +
//   '{ "firstName":"John" , "lastName":"Doe" },' +
//   '{ "firstName":"Anna" , "lastName":"Smith" },' +
//   '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// console.log(text);
// const obj = JSON.parse(text);
// console.log(obj.employees[0].firstName);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   myFunction: function () {
//     return this.firstName;
//   },
// };
// console.log(person.myFunction());
//!Break try catch finally throw
// let x = "1";
// try {
//   if (x.trim() == "") throw "is empty";
//   if (isNaN(x)) throw "is not a number";
//   x = Number(x);
//   if (x > 10) throw "is too high";
//   if (x < 5) throw "is too low";
// } catch (err) {
//   console.log("Error: " + err + ".");
// } finally {
//   console.log(" = ", ";");
// }
//!Break        Typeof Map
// console.log(typeof "hello");
// console.log(typeof "a");
// console.log(typeof 1);
// console.log(typeof [1, 2]);
// console.log(typeof { name: "pras", age: 12 });
// console.log(typeof NaN);
// console.log(typeof false);
// let x;
// console.log(typeof x);

//!Break        JavaScript Map
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);
// console.log(fruits.get("apples"));
// fruits.delete("apples");
// console.log(fruits);
// fruits.forEach((value, index, array) => {
//   console.log(value, index);
// });

// for (let x of fruits.entries()) {
//   console.log(x);
// }

//! Break       JavaScript Sets
// const letter = new Set(["a", "b", "c", "d"]);
// letter.add("e");
// console.log(letter);
// console.log(
//   letter.forEach((value) => {
//     console.log(value);
//   })
// );
// console.log(letter.values());
// for (let x of letter.values) {
//   console.log(x);
// }

//!Break         JavaScript For Of
// const numbers = [45, 4, 9, 16, 25];
// let ab = "prashantpawar";
// for (let a of ab) {
//   console.log(a);
// }
//!Break for in loop
// const numbers = [45, 4, 9, 16, 25];
// const person = { fname: "John", lname: "Doe", age: 25 };
// console.log(
//   numbers.forEach((value, index, array) => {
//     console.log(value);
//   })
// );
// for (let x in person) {
//   console.log(x);
// }

//!Break Compare operator
//logical and && logical or ||
//ternary operator
// let value = 4 > 5 ? "left is big" : "right is big";
// console.log(value);
// let a = null;
// let b = "missing";
// let c = a ?? b;
// console.log(c);
//!Break math.random()

// console.log(Math.random() * 6);
// const random_function = (max, min) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// console.log(random_function(6, 0));
//!Break math._
// console.log(Math.PI);
// let a = -4.5;
// const ab = [12, 23, 1, 23, 1, 4, 2, 34, 21, 21];
// console.log(Math.round(a));
// console.log(Math.ceil(a));
// console.log(Math.floor(a));
// console.log(Math.trunc(a));
// console.log(Math.sign(a));
// console.log(Math.pow(2, 10));
// console.log(Math.sqrt(64));
// console.log(Math.abs(a));

// console.log(Math.max(12, 23, 1, 23, 1, 4, 2, 34, 21, 21));
// console.log(Math.round(Math.random() * 10));

//! Break date
// const dt = new Date();
// console.log(dt.getFullYear());
// console.log(dt.getMonth());
// console.log(dt.getDate());
// console.log(dt.getHours());
// console.log(dt.getMinutes());
// console.log(dt.getMinutes());
// console.log(dt.getSeconds());
// console.log(dt.getMilliseconds());
// console.log(dt.getTime());
// console.log(Date.now()  );

//!Break array loop  (iteration)
// const list = Array.from("abcdefghijklmnopqrstuvwxyz");
// console.log(list);

// const numbers = [45, 4, 9, 16, 25];
// const every_numbers = numbers.some((value, index, array) => {
//   return value > 10;
// });
// console.log(every_numbers);

// const new_numbers = numbers.forEach((value, index, array) => {
//   console.log(value, "\t", index);
// });
// const map_numbers = numbers.map((value, index, array) => {
//   console.log(value);
//   return value > 2;
// });
// console.log(map_numbers);
// const filter_numbers = numbers.filter((value, index, array) => {
//   return value > 2;
// });
// console.log(filter_numbers);
// const reduce_number = numbers.reduceRight((total, value, index, array) => {
//   console.log(total, "\t", value);

//   return total + value;
// });
// console.log(reduce_number);

//!Break array sort method

// const cars = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "BMW", year: 2010 },
// ];
// console.log(
//   cars.sort((a, b) => {
//     return a.year - b.year;
//   })
// );
// const numb = [1, 2, 42, 1, 423, 43];
// const max = (arr) => {
//   return Math.min.apply(null, arr);
// };
// console.log(max(numb));
// numb.sort((a, b) => a - b);
// console.log(numb[numb.length - 1]);

//!Break array sort method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const numb = [1, 2, 42, 1, 423, 43];
// const asc_sorted = numb.toSorted((a, b) => {
//   return a - b; //to be sorted
// });
// const dec_sorted = numb.toSorted((a, b) => {
//   return b - a;
// });
// // fruits.sort();
// // fruits.reverse();
// let new_fruits = fruits.toSorted().toReversed();
// console.log(fruits);
// console.log(asc_sorted);
// console.log(dec_sorted);
// console.log(new_fruits);
//!Break array search method indexOf()
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// console.log(fruits.indexOf("Apple", 1));
// console.log(fruits.lastIndexOf("Apple", 1));
// console.log(fruits.includes("Apple"));
// console.log(
//   fruits.findIndex((value, index, array) => {
//     return value != "Apple";
//   })
// );
//!Break array method slice and splice
//? splice is special slice that at the value
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "aam");
// fruits.splice(2, 3, "kacha aam", "jaam");
// const splic = fruits.toSpliced(0, 3);
// console.log(splic);
// console.log(fruits.slice(1));

//!Break array methods

// const cars = ["Saab", "Volvo", "BMW"];
// let bike = new Array("honda", "hero", "tvs");
// console.log(bike[0]);
// console.log(typeof bike);
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }
// bike[6] = "faltu bike";
// console.log(cars.length);
// let sort_cars = cars.sort();
// console.log(sort_cars);
// console.log(bike);
// console.log(bike.toString());
// console.log(bike.join("-"));
// console.log(bike.pop()); // return the poped element
// console.log(bike.push("hayabusha")); //returns the new array length
// bike.shift();
// console.log(bike);
// bike.unshift("ninja");
// console.log(bike);
// bike[0] = "ninja_haayabush";
// console.log(bike);
// console.log(bike.concat(cars));
// const myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const newArr = myArr.flat();
// console.log(newArr);

//!Break number methods
// let x = 12300;

// let y = x.toExponential();
// console.log(typeof x.toString());
// console.log(y.toString());
//!break string literals
// let a = 5;
// let text = `Hello world
// "prashant pawar"
// and you`;
// console.log(text, `${5 * 5 * a}`);

//!break string search
// let text = "Please locate where 'locate' occurs!";
// let index = text.search(/locate/gi  );

// let text = "The rain in SPAIN stays mainly in the plain";
// let index = text.match(/ain/);
// let index = text.matchAll("rain"); //exact match
// console.log(Array.from(index));
// let text = "Hello world, welcome to the universe.";
// let include_value = text.includes("world", 12);
// console.log(include_value);

// let start_with = text.startsWith("world", 6);
// console.log(start_with);
//! break String
// let a = 'hello "prashant" world';
// let b = "hello 'prashant' \\ world";
// let c = `hello "prashant "world`;
// let d = new String("John");
// console.log(a, b, c);
// console.log(d);

// console.log(a.length);

//!break String methods
// let a = "Lorem ipsum";
// let b = a[2];
// console.log(b);
// console.log(a.charAt(1));
// console.log(a.at(1));
// console.log(a.at(-2));
// // console.log(a.charCodeAt(1));
// console.log(a.length);

//? Extracting String part
/**
 * Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
 */
// let a = "Lorem ipsum";
// let b = a.slice(6, 11);
// let c = a.slice(3);
// let d = a.slice(-11);
// console.log(b, "\n", c, "\n", d);
// console.log(a.length);

/**
 *
 * Extracting String Characters
There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method:The charAt() method returns the character at a specified index (position) in a string:
The charCodeAt(position) Method
Using property access [] like in arrays
 */

//!break Object
// let struct = {
//   a: "hellow",
//   b: "world",
//   c: function () {
//     return struct.a + struct.b;
//   },
// };
// console.log(struct.a, struct.b);
// console.log(struct.c());
//!break

// let d = new Date();
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getMilliseconds());

//!break
// function multiply(a, b) {
//   console.log(a * b);
// }
// multiply(12, 2);
//! break
// function toCelsius(fahrenheit) {
//   return (5 / 9) * (fahrenheit - 32);
// }

// let value = toCelsius(12);
// console.log(value);
//!break
// const car = {
//   name: "maruti",
//   body: "fiber",
//   speed: "100kmph",
//   drift: function () {
//     console.log(
//       this.name,
//       "can go at the speed of",
//       this.speed,
//       "despite having body of",
//       this.body
//     );
//   },
// };
// car.drift();
