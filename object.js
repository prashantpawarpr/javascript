//singleton
// Object.create(o);
//contructor
//object literals
// const mySym = Symbol("key1");
// const JsUser = {
//   name: "prashant",
//   age: 26,
//   [mySym]: "newKey1",
//   location: "chhindwara",
//   email: "prashantpawarpr@gmail.com",
//   lastLogin: ["Monday", "Tuesday"],
//   0: 12321,
//   "full name": "prashant pawar",
// };
// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["0"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// JsUser.email = "prworld.co.nf";
// Object.freeze(JsUser);
//Object.freeze method is used to freeze an object so the data won't change and if we try to change the data it will simple
//ignore it
//
// JsUser.email = "prworld.com";
//
// JsUser.tempfunct = function () {
//   console.log("hello world from function");
// };
// JsUser.getName = function () {
//   console.log(`the name of the user is ${this.name}`);
// };
// console.log(JsUser);
// JsUser.tempfunct();
// JsUser.getName();
const obj = new Object();
obj.id = "123";
obj.name = "prashant";
obj.age = 26;
obj.isLoggedIn = true;
const obj1 = { 1: "12", 2: "21" };
const obj2 = { 3: "234", 4: "12930" };
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj);
console.log(obj3);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.hasOwnProperty(obj, "id")); //true or false
