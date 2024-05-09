// let arr = [12, 12, 213, 12];
// let arr1 = [12, 12, 213, 12];
// arr.push(0);
// arr.pop();
// arr.shift();
// arr.unshift(11);
// console.log(arr);
// console.log(arr.includes(11));
// console.log(arr.indexOf(12));
// console.log(typeof arr.join(arr1));
// console.log(arr.join(arr1));
//slice splice
// console.log(arr.slice(0, 2));
// console.log(arr.toSpliced(0, 2));
// arr.splice(0, 2);
// console.log(arr);
// const heros = ["ironman", "superman", "spiderman"];
// const dc_heros = ["batman", "flash", "wonderwoman"];
// heros.push(dc_heros);
// console.log(heros.flat());
// let new_heros = heros.concat(dc_heros);
// console.log(new_heros);
// console.log([...heros, ...dc_heros]);
// let a = [
//   12,
//   1,
//   31,
//   23,
//   12,
//   3,
//   12,
//   [123, 12, 3, [12, 21, 3, 12, 3, [12, 1, 3, 123, 1, 23], 123, 1], 12, 31],
//   [123, 12, 3, 12, 31, 2],
// ];
// console.log(a.flat(3));
// console.log(a.flat(Infinity));

console.log(Array.isArray("Prashant"));
console.log(Array.from("Prashant"));
console.log(Array.from({ name: "Prashant" }));

let score = 100;
let score2 = 300;
let score3 = 200;
console.log(Array.of(score, score2, score3));
