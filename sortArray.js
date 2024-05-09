let arr = [2, 3, 1, 5, 4, 9, 10];
let newarr = [];
console.log(arr);
for (let a = 0; a <= arr.length - 1; a++) {
  for (let b = 0; b <= arr.length - 1; b++) {
    if (a !== b) {
      if (arr[a] > arr[b]) {
        newarr.push(arr[b]);
      }
    }
  }
}
console.log(newarr);
