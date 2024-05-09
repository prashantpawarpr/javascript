// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 1200;
//   d = 12;
// }
// // console.log(a);
// // console.log(b);
// console.log(c);
// console.log(c);
// function one() {
//   const username = "prashant";
//   function two() {
//     const website = "youtube";
//     console.log(username);
//     console.log(website);
//   }
//   two();
// }
// one();
console.log(addOne(5));
function addOne(num) {
  //first method
  return num + 1;
}
const addTwo = function (num) {
  //second method``
  return num + 2;
};
console.log(addTwo(23));
const addThree = (num) => {
  //third method
  return num + 3;
};
console.log(addThree(34));
//note we can access function before initelization in first method
//while in first method we can access the function before initilization
//while in second and third method we can't access the function before initilization

//arrow function and this keyword
