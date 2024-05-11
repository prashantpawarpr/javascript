// let a = "feb";
// if (a)
//   console.log("the condition is true"),
//     console.log("the condition is true again");
//
// switch (a) {
//   case true:
//     console.log("the condition is true");
//   // break;
//   case false:
//     console.log("the condition is false");
//   // break;
//   default:
//     console.log("no condition");
// }
//truthy value , falsy value
// " "               0
//  []              -0
//  {}              Bigint 0n
//  function(){}      ""
//                null
//                undefined,
//                NaN
// let value = "true";
// let value1 = [];
// let value2 = {};
// //way of check array is empty or not
// if (value1.length === 0) {
//   console.log("the array is empty");
// }
// //way of check object is empty or not
// if (Object.keys(value2).length === 0) {
//   console.log("object is empty");
// }
// if (value) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// Nullish coalescing Operator (??):  Null undefined
//
let val1;
val1 = 5 ?? 10;
console.log(val1);
val1 = null ?? 10;
console.log(val1);
val1 = undefined ?? null; //in condition of comparing the undefined and null the second value is assigned
console.log(val1);
val1 = undefined ?? 10;
console.log(val1);
val1 = 10 ?? null;
console.log(val1);
