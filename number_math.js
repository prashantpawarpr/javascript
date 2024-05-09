// const score = 123.1231;
// const result = 124.123;
// console.log(score.toString());
// console.log(result.toString());
// let test1 = result.toString();
// console.log(test1.length);
// console.log(score.toFixed(2));
// console.log(score.toPrecision(5));
// let hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
//**   Math library

// console.log(Math.abs(-4));
// console.log(Math.round(4.5231));
// console.log(Math.ceil(4.1231));
// console.log(Math.floor(4.1231));

// console.log(random); //number is between 0 to 1
// let newrandom = random * 10 + 1;
// console.log(Math.floor(newrandom));

const min = 1;
const max = 6;
for (let i = 0; i <= 10; i++) {
  console.log(Math.floor(Math.random() * (max - min + 1) + min));
}
//Math.random gives value from 0 (including zero) to  less than 1 (doesn't include 1);
/**
 *random .12
 *random .12*(10-5)+5=0.6+5=5;
 *       .40*(10-5)+5= 2.0+5=7;
 *       1.*(10-5)+5= 5.0+5=10;checking the edge case
 *       0.*(10-5)+5= 0+5=5;checking the edge case
 *
 */
