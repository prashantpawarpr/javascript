//stack               //heap
//
//primitive type stores in stack memory //it gets the copy of the data
//Non - primitive type stores in heap memory // it gets the refeerenc of data
let a = "mynameis prahsant";
let b = a;
b = "hello world";
console.log(a);
console.log(b);
let arr = {
  name: "prashant",
  upi: "hello world",
};
let arr1 = arr;
console.log(arr);
arr1["upi2"] = "another world";
console.log(arr1);
console.log(arr);
let arra = [12, 21, 12, 1, 2, 12, 1];
let arra1 = arr;
arra1.push(12);
console.log(arra1);
console.log(arra);
