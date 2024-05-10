/**
 *          JAVASCRIPT EXECUTION CONTEXT
 *
 *          {} GLOBAL EXECUTION CONTEXT refer to this
 *
 *          GEC (GLOBAL EXECUTION CONTEXT)
 *          browser has different execution context and run time environment(node , bun ,dino) has different execution context
 *
 *          1>Global Execution Context
 *          2>Function/Functional Execution Context
 *          3>Evaluation/Eval Execution Context
 *
 *          1> js code runs in two phase
 *            > MEMORY CREATION PHASE (only memory is allocated in the file)
 *
 *              let val1 = 18;
 *              let val2 = 19;
 *              function addnum(num1 , num2){
 *              let total = num1+num2;
 *              return total;
 *              }
 *              let result = addnum(val1,val2);
 *              let result2 = addnum(18,12);
 *
 *
 *                  How this code is execute
 *
 *                  1> Global Execution/Global environment(this will happen);
 *                        (this)
 *                  2> Memory creation phase:-
 *                  first cycle
 *                      val1->undefined;
 *                      vale->undefined;
 *                            addnum->definition;
 *                      resutl = undefined;
 *                      result2 = undefined;
 *                3> Execution phase
 *                  Second cycle
 *                    val1 = 18;
 *                    val2 = 19;
 *                    addnum(18,12);=> the function will make another execution context
 *                                1> GEC(this)( new variable environment   + Execution thread)
 *                                2> Memory Creation Phase
 *                                      num1 = undefined;
 *                                      num2= undefined;
 *                                      total = undefined;
 *                                3>Execution Phase
 *                                      num1 = val1;
 *                                      num2= val2;
 *                                      total= val1+val2; this total return to parent GEC
 *                                4> this EC destroyed
 *            > EXECUTION PHASE
 *
 */

/*
 *                            CALL STACK
 *
 *
 *
 *
 *                              three
 *                              two
 *                              one
 *                          Global Execution Context
 *
 *                          LIFO last in first out
 *
 *
 * */
