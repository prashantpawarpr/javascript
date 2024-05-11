// let arr = [1, 2, 3, 4, 5];
//
// let str = "prashant pawar";
//
// for (const i of str) {
//   console.log(i);
// }
//to iterate over object we have to use
// FOR IN

// console.log("\n");
// let obj = {
//   name: "prashant",
//   age: 26,
//   single: "yes",
//   height: "6ft",
//   salary: "signed NDA",
// };
// for (const i in obj) {
//   console.log(obj[i]);
// }

// console.log("\n");
// const newMap = new Map();
// newMap.set("IN", "INDIA");
// newMap.set("US", "USA");
// newMap.set("IN", "India");
// newMap.set("AUS", "AUSTRLIA");
//
// console.log(newMap);
// for (let [key, value] of newMap) {
//   console.log(value);
//   console.log(key);
// }
// for (let i of newMap) {
//   console.log(i[0]);
// }
// const myObj = {
//   js: "javascript",
//   cpp: "c plus plus",
//   rb: "ruby",
//   swift: "swift",
// };
//
// for (let key in myObj) {
//   console.log(key);
//   console.log(myObj[key]);
// }
//
// let arr = ["js", "cpp", "py", "java"];
// for (let key in arr) {
//   console.log(key);
// }

//for each
// item, index , arr
// let arr = [12, 21, 2, 12, 1, 22];
// arr.forEach((items, index, arr) => {
//   console.log(items), console.log(index), console.log(arr);
// });
// arr.forEach(test);
//another way
// function test(items) {
//   console.log(items);
// }

let obj_in_array = [
  { lName: "javascript", lExtenstion: "js" },
  { lName: "java", lExtenstion: "java" },
  { lName: "html", lExtenstion: "html" },
  { lName: "c++", lExtenstion: "cpp" },
];
obj_in_array.forEach((items) => {
  console.log(items.lExtenstion);
});
