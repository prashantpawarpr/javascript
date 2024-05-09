// Immediate invoke function Expression (IIFE)

// function hello() {
//   console.log("hello");
// }
// hello();

//()();
(function hello() {
  //named iife because we have a name
  console.log("hello world");
})();
//iife we generally need to stop the execution of the function of the function to do so we need to use ; after iife expression
//()(); her semicolon is important or the function continue its execution
((hello) => {
  //unnamed iife because we dont have a name
  console.log(`hello ${hello}`);
})("prashant");
