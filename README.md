<h1>Introduction</h1>

Repository for learning javascript

<ul type="square">
<li> Keywords </li>
<li> data type</li>
<li> type converison</li>
<li> conversion operator</li>
<li> array</li>
<li> object</li>
<li> function</li>
  <ul> 
    <li> arrow function</li>
  </ul>
<li>dates </li>
<li> Number</li>
<li> Math</li>
<li> memory</li>
<li> scope</li>
<li> IIFE
<ul>
<li>Immediate invoke function expression</li>
<li>named IIFE</li>
      <li>unnamed IIFE</li>
    </ul

  </li> 
<li>Java Execution Context</li>
<li>CONDITIONAL statement</li>
<li>Higher order loop</li>

</ul>

<h1 style="text-align: center;">JAVASCRIPT EXECUTION CONTEXT</h1>
<pre><p>
when javascript code run it create  two thing 
1. Global Execution CONTEXT
  GEC is absolute it will form when we run javascript code 
  GEC behave differently in browser and in run time environment(node , bun , dino)
                 In Browser it will global object which will be refered by this keywords
                 while in run time environment it will be give empty object
2.function/functional Execution Context(memory creation phase , execution phase)
                 Memory Creation Phase (Only memory is allocated to the variable and function)
                Exection Phase (value is assigned to the variable )

</p>
</pre>
# CONDITIONAL STATEMENT
<pre>
<p>
few important point to take note of :-
    if we use if statement we can use statement without {} and if we want to write multiply statement without
    using {} we can do by seperating them using comma(,) and secicolon is mandatory at the end of the if statement syntax
 ### TRUTHY AND FALSY VALUE
          falsy value are limited so we will write down the falsy value first
          1.  0  
          2.  -0
          3.  Bigint 0n
          4.  ""
          5. null
          6. undefined
          7. NaN
          And all other value are falsy value 
         1.function(){} 
         2."0" 
         3."null"
         4. "false"
         5.[] 
         6.{}
         6.""
   ###  NOTE FOR CHECKING ARRAY AND object
    if(arr.length==0){
    console.log("the array is empty");
    }

    //object CHECKING
    if(Object.keys(obj).length===0){
    console.log("the obj is empty");
    }

### NULLISH COALISCING OPERATOR (??) to check "null" or undefined value

    console.log(2??null);
    console.log(null??2);
    console.log(undefined??2);
    console.log(undefined??null);//the second value will be displayed when we compare the undefined or null because once it see the
                                  first value is undefined/null it will jump to second value;

  </p>
</pre>
  #HIGHER ORDER LOOP
<pre>
  <h3>For in loop</h3>
    to iterate over object we use for in loop
  <h3> For of loop</h3>
    to iterate over array,map we use for of loop
  <h4> MAP => is similar like object</h4>
            and has unique key (copy of the key is avoided)
            if we use for of loop to display the map. it will return the entire map in array format
  <h4>For Each=> is higher order function i.e is it takes callback function as a parameter 
                it will iterate over the each element
                it takes a callback function i.e either anoynomous function or arrow function

  </h4>
</pre>
