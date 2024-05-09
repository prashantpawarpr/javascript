//var
//let
//const
//variable    _
//data types
//Number = 1234123412=1234121/2134
//String = ""   "" ''
//boolean= true false     1 0

// let asd = "sugar";

// a = "salt";
// const b = "oil";

// console.log(b);
// 12/2=6
// 12%2=
// let a = 1;
// let b = 2;
// let sum = a * b;
// console.log(sum);

// let a = 79;
//let a;
//a=79;
// let b = 17;
// let sum = a % b;
// console.log(sum);

//    5 > 4   t
//    5 < 4   f
//    5 <= 4    f     5=>5    t
//    5 >= 4    t     5>=5    t
//    5 == "5"    t
//    5 === "5"   f
//    5 != 5    f

//loop
// while do while for
// let c = 1;

// while (c <= 100) {
//   console.log("hello world ", c);
//   c = c + 1; //c =101
// }

// for( let c = 1; c <= 100;  c = c + 1 ){
//     console.log("hello world ", c);
// }
// let c = 1;
// do {
//   console.log("hello world ", c);
//   c = c + 1;
// } while (c <= 0);

// let a = 5;
// let b = "5";
// if (a == b) {
//   console.log("muskan");
// }

// var a = "rice";
// const b = "pulse";
// a = "wheat";
// console.log(b);

// let a = "1";

// let b = "1";
// let c = a + b;
// console.log(c); //11
//integer =  1324-134123411=3321
//string = "12312312"
//Boolean  = true false

//          5>4         true        1
//           5<4    false       0
//              5<=4    false       0
//              5>=4    true        1
//              5   ==  5           5===

//function

/**
 *
 * a+b
 * a+b
 *
 *
 */

// function variable(num1, num2) {
//   let a = num1;
//   let b = num2;
//   console.log(a + b);
//   return;
// }

// variable("78", "45");

// function cal(num, num1, num2) {
//   let a = num1;
//   let b = num2;
//   let c = num;
//   console.log(c);
//   if ("+" == c) console.log(a + b);
//   if ("-" == c) console.log(a - b);
//   if ("/" == c) console.log(a / b);
//   if ("%" == c) console.log(a % b);
// }
// cal("+", 12, 12);
// cal("-", 12, 12);
// cal("/", 12, 12);
// cal("%", 12, 12)
// console.log("true");
//loop
// for      2. while    3. do while

// let a = 1;

// while (a == 100) {
//   console.log(a);
//   a = a + 1;
// }

// let num = 1;
// while (num <= 10) {
//   let a = 1;
//   while (a <= 10) {
//     console.log(num * a);
//     a = a + 1;
//   }
//   num = num + 1;
// }

// for (let a = 1; a <= 10; a = a + 1) {
//   console.log("hello world");
// }

// let a = 1;

// do {
//   console.log("hello world");
//   a = a + 1;
// } while (a < 1);

/**
 *
 *
 *
 *
 *
 *
 */
// let a = 23;

// switch (a) {
//   case 1:
//     console.log("this is two ");
//     break;
//   case 2:
//     console.log("this is one");
//     break;
//   case 3:
//     console.log("this is three ");
//     break;
//   case 4:
//     console.log("this is four");
//     break;
//   case 5:
//     console.log("this is five ");
//     break;
//   default:
//     console.log("this is default");
// }

// break
// continue
//while for do while

// let a = 1;
// while (a < 10) {
//   console.log(a);
//     a=a+1;
//   //increament
// }

// for (let b = 1; b < 10; b = b + 1) {
//   console.log(b);
// }

// let c = 1;
// do {
//   console.log(c);
//   c = c + 1;
// } while (c < 1);

//array

//object

// let arr = ["12", "213", "213", "123", "123"];

// for (let b = 0; b <= 4; b = b + 1) {
//   //b=0
//   console.log(b, " ", arr[b]); //arr[0]  arr[1] arr[2]
// }

//index = length - 1
//data type must be same
//index value (position) start with zero (e.g 12 and its index value is
//zero)
//a.length          5

//derived

/**
 * array
 * let  a = [12,21,321,312,1];
 *inside square
 *comma
 * index number 0
 *
 *
 */

//arr[index_value]
// .length
//      12  12
//      123 12
//
//
// let count = rrr.length;
// let total = 0;
// console.log(total);
// for (let a = 0; a <= count - 1; a = a + 1) {
//   total = total + rrr[a];
// }
// console.log(total);

// console.log(typeof rrr);

// let obj = {
//   num: 1,
//   name: "adsbv",
// };
// let c = obj.num;
// let d = obj["name"];

// console.log(c);
// console.log(d);

//example array

// let arr = [
//   [1231, 23, 123, 21, 123, 12, 12, 31231, 21, 12, 31, 2, 31, 3, 12, 123, 1, 3],
//   [
//     123,
//     12,
//     2,
//     [2, 367, 3, 312, 126],
//     312,
//     31,
//     [21, 12, 3],
//     1,
//     [23, 12, 31, 3, 12],
//     3,
//     1,
//   ],
//   [12312, 21, 12, 312, 12, 21, 132, 21, 12, 3, 12, 31, 23],
// ];
// let total = 0;
// let subTotal1 = 0;
// let subTotal2 = 0;
// let subTotal3 = 0;
// for (let b = 0; b <= arr[1].length - 1; b++) {
//   if (b < 3) {
//     total = total + arr[1][b];
//   }
//   if (b == 4) {
//     total = total + arr[1][b];
//   }
//   if (b == 5) {
//     total = total + arr[1][b];
//   }
//   if (b == 7) {
//     total = total + arr[1][b];
//   }
//   if (b >= 9) {
//     total = total + arr[1][b];
//   }
//   if (b == 3) {
//     for (let c = 0; c <= arr[1][3].length - 1; c++) {
//       subTotal1 = subTotal1 + arr[1][3][c];
//     }
//   }
//   if (b == 6) {
//     for (let c = 0; c <= arr[1][6].length - 1; c++) {
//       subTotal2 = subTotal2 + arr[1][6][c];
//     }
//   }
//   if (b == 8) {
//     for (let c = 0; c <= arr[1][8].length - 1; c++) {
//       subTotal3 = subTotal3 + arr[1][8][c];
//     }
//   }
// }
// console.log(total + subTotal1 + subTotal2 + subTotal3);
/**

 *
 *
 *
 * logical and &&
 *
 *
 *
 *
 */
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [];

// for (let a = 0, b = arr1.length - 1; a <= arr1.length - 1, b >= 0; a++, b--) {
//   arr2[b] = arr1[a];
//   // console.log(arr1[a]);
// }
// console.log(arr2);

// for (let c = 1; c <= 4; c++) {
//   console.log(c, "c wala loop");
//   for (let d = 1; d <= 5; d++) {
//     console.log(d, "d wala loops");
//   }
// }
//5>4  true    4>6   false
//comparing two number find the biggest number between them

// let a = 30;
// let b = 25;
// let c = 15;
// let d=150;
// if (a > b) {
//   if (a > c) {
//     console.log("a is biggest");
//   } else {
//     console.log("c is biggest");
//   }
// } else if (b > c) {
//   console.log("b is biggest");
// } else {
//   console.log("c is biggest");
// }

//biggest between two umber

// let a = 1000;
// let b = 200;
// let c = 3000;

// if (a > b) {
//   if (a > c) {
//     console.log("a sabse bada");
//   } else {
//     console.log("c sabse bada");
//   }
// } else if (b > c) {
//   console.log("b sabse bada");
// } else {
//   console.log("c sabse bada");
// }

/**
 * 90 a+
 * 75  a
 * 60  b
 * 50  c
 * 33  d
 * fail *
 */
// let a = 900;
// if (a > 100) {
//   console.log("chal jhoota");
// } else if (a >= 90) {
//   console.log("A+");
// } else if (a >= 75) {
//   console.log("a");
// } else if (a >= 60) {
//   console.log("b");
// } else if (a >= 50) {
//   console.log("c");
// } else if (a >= 33) {
//   console.log("d");
// } else {
//   console.log("fail");
// }

//preincreement     //postincrement

// ++a                   a++
// a=a+1                 a=a+1

// for (let a = 1; a <= 5; a++) {
//   for (let b = 1; b <= 5; b++) {
//     console.log(b);
//   }
// }/
// let sum = 0;
// let total1 = 0;
// let total2 = 0;
// let arr = [
//   12,
//   23,
//   23,
//   [123, 123, 12, [12, 3, 465, 6, 7, 89, 90, 98], 2, 4, 43],
//   4,
//   34,
//   35,
//   5,
// ];
// for (let a = 0; a <= arr.length - 1; a = a + 1) {
//   if (a == 3) {
//     let newarr = arr[3];
//     for (let b = 0; b <= newarr.length - 1; b = b + 1) {
//       if (b == 3) {
//         let newnewarr = newarr[3];
//         for (let c = 0; c <= newnewarr.length - 1; c++) {
//           total2 = total2 + newnewarr[c];
//         }
//       } else {
//         total1 = total1 + newarr[b];
//       }
//     }
//   } else {
//     sum = sum + arr[a];
//   }
// }
// console.log(sum + total1 + total2);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr1 = [];
// for (let a = arr.length - 1, b = 0; a >= 0, b <= arr.length - 1; a--, b++) {
//   arr1[b] = arr[a];
// }
// // console.log(arr[a]);

// console.log(arr1);

// let obj = {
//   name: "yogesh",
//   Age: 19,
//   1: {
//     addr1: "aadrsh mohola",
//     addr2: "kamthi",
//     addr3: "mohkhed",
//     addr4: "chhindwara",
//   },
//   pass: true,
// };
// // console.log(obj.name, obj.Age, obj.addr, obj.pass);
// console.log(
//   obj["addr"].addr1,
//   obj["addr"].addr2,
//   obj["addr"].addr3,
//   obj["addr"].addr4
// );

// let obj = {
//   name: "prashant",
//   age: 26,
//   addr: {
//     addr1: "house no 56",
//     addr2: "chhindwara",
//   },
//   educated: true,
// };
// console.log(obj["addr"].addr1);
// function fun(num1) {
//   //parameter
//   console.log(num1.name);
// }
// fun([12, 3, 4, 5, 4, 324, 3, 546]);
// fun({ name: "prashant", age: 26, add: "asdkjf;asjd;lkjfas;ld" });

/**
 *
 *
 * add();     out 1 2 44=5
 */

// let obj = {
//   obj1: {},
//   arr: [1, 2, 3, , 4, 3, 2, 21, 3, 12, 123, 12, 31, 23, 123],
//   funct: function () {
//     console.log("function is called");
//   },
// };

// // console.log(obj.);
// obj.funct();

// const arr = [123, 23, 21, 123, 12, 3, 123, 1];
//.length => it gives total number of element inside the array
//.push()  => when we use .push method it adds the element inside the array . the index of the element will be last
// push method takes a parameter(value) the value that you want to add
//.pop => when we use .pop method it removes the element the last index of the array
//.shift :using shift() method we remove the value from the first index of array

//.unshift =>  using unshift() method we add the value to the first index of the array
//unshift() method also works similar like push method , difference is it add value at start of the array
//.at() = >
// console.log(arr.length);
// arr.push(123);
// console.log(arr);
// console.log(arr.pop());
// console.log(arr.shift());
// arr.unshift(10);
// console.log(arr);
// console.log(arr);
// console.log(arr.at(2));

// let str = "yOgesh bhai he 4 ko chhor kar";
// let str1 = "prashant pawar";
// console.log(str[0]);
// console.log(str[str.length - 1]);
// console.log(str[6]);
// for (let a = str.length - 1; a >= 0; a--) {
//   console.log(str[a]);
// }
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str1 + str + str1);
// console.log(str1.concat(str));
// console.log(3** 5);

// let arr = [
//   21,
//   3,
//   2,
//   2,
//   3,
//   44,
//   45,
//   45,
//   [12, 23, 4, 3, 45],
//   [12312, 234, 34, 45, 45, 3],
//   65,
// ];
// console.log(arr.flat());
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let newFruits = fruits.toSpliced(1, 0, "kiwi", "grapes");
// console.log(fruits);
// console.log(newFruits);
// fruits.slice(1, 3);
// console.log(fruits);
// fruits.splice(2, 2, "kiwi", "grapes");
// console.log(fruits);
//arr.length
//arr.push

// arr.push(12);
// console.log(arr);

// //pop
// console.log(arr.pop());
// //shift
// console.log(arr.shift());
// console.log(arr);
// //unshift
// arr.unshift(23);
// console.log(arr);
// console.log(arr.at(4));

/**
 *.slice()  => slice method is used to extract element from the array 
 *       1>   start , end     
 * e.g= > start is the starting position the array 
 *      > end is the ending position of the array ( when sliced it doesn't include the ending position element )
 *      > slice method create a new array and doesn't change the existing array
 * 
 * 
 * 2> .toSpliced() => toSpliced method is used to insert the value in the array as well as to delete the element from the array 
 *          .toSpliced method takes three parameter
 *        1  position    
 *         2  number of element to be deleted
 *          3  total element you want to add seperated using  comma(,)
 *   example:-  let fruits = ["Banana", "Orange", "Apple", "Mango"];
                let newFruits = fruits.toSpliced(1, 0, "kiwi", "grapes");
                output :-
                ["Banana", "kiwi", "grapes","Orange", "Apple", "Mango"]

                array is added before the given position number e.g if we give 1 position the element starting before the [1] element


                toSpliced() method creates a new array 
                splice () method and toSpliced method are same only difference is to toSpliced method creates a new array while splice method changes the existing array
 * 
    => .flat() = flat method is use to generalize the array e.g it will destructure the array and add into the parent array 
    e.g  let arr = [1,2,[32,34,54,],[12]]
            arr.flat();
            output=>[
            1,2,32,34,54,12
            ]


=>.at() = .at method takes one parameter e.g index value 
            when we use .at() method it gives element of the given index value

            example :-   let arr = [1,2,[32,34,54,],[12]]
                arr.at(1)
                output:-   2

.=>concat() = it is used to merge two array
.=>toString method convert array into string
 *              let arr = ["prashant", "pawar"];
                console.log(arr.toString());
                output:
                prashant,pawar
 * =>join() =method also give output in string 
                join() method combine all the element of the array using given joiner(parameter) ,
                let arr = ["prashant", "pawar"];
                example :- arr.join("*")
                output:-  prashant*pawar
 * 
 */

//typeof()

// console.log(typeof undefined);
// let a = [1, 2, 3, 2, 32, 3, 2, 3];
// a.reverse();
// console.log(a);
// console.log(a.toSorted());
// a.map((items) => {
//   console.log(items);
// });

// let str = "hello world";
// for (let a = 0; a <= arr.length; a++) {
//   console.log(arr[a]);
//       //   console.log(str[a]);
// }

//.map
//.forEach

// arr.map((items) => {
//   console.log(items);
// });
// let arr = [
//   213,
//   23,
//   2,
//   [12, 23, 32, 43, 234, 32],
//   1,
//   [123, 23, 2, 321],
//   23,
//   23,
//   2,
//   1,
// ];
// let arr1 = [213, 23, 2, 1, 23, 23, 2, 1];
// let c = arr.flat();
// console.log(c);
// let c = arr.concat(arr1);
// let str = arr.join("/");
// console.log(str);
// console.log(c);
// let str = arr.toString();
// console.log(typeof str);
// console.log(arr);
// arr.length;
// arr.push(112);
// console.log(arr);

// arr.unshift(123);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);

// //.at()
// console.log(arr.at(2));

// let a = ["bmw", "toyota", "ford", "volkswagon"];

// splice(indexvalue,no of element to be getDefaultResultOrder,"","","")

// a.splice(2, 1, "kia", "volvo", "tata");
// console.log(a);
// let ar = a.slice(1);
// console.log(ar);
// console.log(a);

// let arr = a.toSpliced(2, 1, "kia", "volvo", "tata");
// console.log(arr);
// console.log(a);
// let a = ["bmw", "toyota", "ford", "volkswagon"];

// console.log(a.includes("bmwa"));
// let a = [1, 2, 2, 32, 2, 3, 23, 2, 3];
// a.map(function (items) {
//   console.log(items);
// });

// a.map((a) => {
//   console.log(a);
// });
let arr = [
  12,
  23,
  2,
  3,
  243,
  4,
  [
    12312,
    23,
    1,
    [12, 12, 2, [1, 2, 3, 4, 5, 6], 3, 3, 4, 21],
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
  [213, [1, 2, 3, 43, 34, 5], 2, 4, 3, 3, 5, 5],
  12,
  22,
  32,
  1,
  3,
];
let newarr = [];
let finalarr = [];
for (let a = 0; a <= arr.length - 1; a++) {
  let data_type_of = typeof arr[a];
  console.log(data_type_of);
  if (data_type_of == "object") {
    arr = arr.flat();
  }
}
console.log(arr);
