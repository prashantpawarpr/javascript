// let dt = new Date();
// console.log(dt.toString());
// console.log(typeof dt);
// //toString method is used to see time in human readable form
// console.log(dt.toDateString());
// console.log(dt.toLocaleString());
// console.log(dt.toLocaleDateString());
// console.log(dt.toLocaleTimeString());
// let myCreateDate = new Date(2023, 11, 1);
// let myCreateDate1 = new Date("2023-01-14");
// //month starts from 0
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate1.toDateString());
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// let sub = myTimeStamp - myCreateDate.getTime();
// console.log(Math.floor(sub / (1000 * 60 * 60 * 12)));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getDay());
newDate.toLocaleString("default", {
  weekday: "long",
  timeZone: "Asia/Kolkata",
});
