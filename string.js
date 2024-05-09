let str = new String(
  "hello world hello world hello world hello world hello world ",
);
let str2 = "prashant pawar";
console.log(str[1]);
console.log(str2[1]);
console.log(str2.length);
console.log(typeof str2);
console.log(str2.toUpperCase());
console.log(typeof str);
console.log(`the name is ${str}, ${str2.toUpperCase()} `);
console.log(str2.charAt(2));
console.log(str.concat(str2));
console.log(str.indexOf("l"));
console.log(str.slice(6, 11));
// console.log(str.splice(5, 0, "prashant", "world"));
console.log(str.substring(5, 8));
let a = "   a    ";
let b = a.trim();
console.log(b.trim());
console.log(b.length);
let c = str.replace(/hello/gi, "*");
console.log(c);
console.log(str.includes("hello"));
console.log(c.includes("hello"));
console.log(c.includes("*"));
console.log(str.split(" ").length);
