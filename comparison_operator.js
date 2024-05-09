//coparision between different types
// console.log("2" > 1);
// console.log("02" > 1);
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(undefined >= 0);
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(1 == "1");
// console.log(1 === "1");
//interview prepration
//premitive     non-premitive
//distinguish based on data stores
//premitive :- call by value (basically it takes the copy of the original value)
//Number
//String
//Boolean
//null
//undefined
//Symbol
//BigInt
//non-premitive  call by reference (it gives the pointer of the value)
//Array
//object
//
//is javascript dynamically type or static type
//
//dynamic type type . simply where we want don't have to give specific type like int float long etc
//
//
//
//
//
const score = 100;
const scoreValue = 12.1231;
const isLoggedIn = true;
const outsidetemp = null;
let userEmail;
const id = Symbol("1234");
const anotherid = Symbol("1234");
// console.log(id == anotherid);

let heros = ["ironman", "superman", "batman"];
let obj = {
  name: "prashant",
  age: 26,
  arr: heros,
  fun: hellofun(),
};
console.log(heros);
console.log(obj);
function hellofun() {
  console.log("hello world");
}
hellofun();
console.log(typeof hellofun);
console.log(typeof heros);
console.log(typeof obj);
console.log(typeof Null);
console.log(typeof undefined);
console.log(typeof NaN);
