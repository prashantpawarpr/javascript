let arr = [
  12,
  23,
  2,
  3,
  243,
  4,
  [
    12312,
    [213, 2, [213, 2, 4, 3, 3, 5, 5], , 4, 3, 3, 5, 5],
    23,
    1,
    [12, 12, 2, 3, 3, 4, 21],
    2,
    12,
    312,
    1,
    1,
    2,
    2,
  ],
  123,
  123,
  2,
  31,
  [213, 2, [213, 2, 4, 3, 3, 5, 5], , 4, 3, 3, 5, 5],
  [213, 2, 4, 3, 3, 5, 5],
  12,
  22,
  32,
  1,
  3,
];

for (let a = 0; a <= arr.length - 1; a++) {
  let data_type_of = typeof arr[a];
  if (data_type_of == "object") {
    arr = arr.flat();
  }
}
console.log(arr);
let total = 0;
for (let a = 0; a <= arr.length - 1; a++) {
  total += arr[a];
}
console.log("totat is ", total);
