// Modern Javascript exercises for variable scope to closure Especially nested functions
//Code block
// {"use strict"
//         let message= "Hello";   //visible ONLY inside code block
//         alert (message);        //displayed
//         console.log(message);   //displayed
//         document.getElementById("bob1").innerHTML= "An isolated code block which says: " + (message);
// }
//alert (message);                                      //error message
//console.log(message);                                 //error message
//document.getElementById("bob1").innerHTML= (message);   //error message

//Two code blocks
// {"use strict"
//     let message= "Hello";
//     console.log(message);
//     document.getElementById("bob2").innerHTML= "Using the same variable name, message is: " + message;
// }
// {"use strict"
//     let message= "Goodbye";
//     console.log(message);
//     document.getElementById("bob3").innerHTML= "Using the same variable name, message is: " + message;
// }

//Without code blocks
// "use strict"
//     let message= "Hello";
//     console.log(message);
//     document.getElementById("bob4").innerHTML= "Using the first variable name, message is: " + message;

//     let message= "Goodbye";
//     console.log(message);
//     document.getElementById("bob5").innerHTML= "Using the same variable name, message is: " + message;

//if for while and so on, variables declared in {...} are also only visible inside:
//     if (true){"use strict"
//         let phrase= "Hello again";
//         console.log(phrase)
//         document.getElementById("bob6").innerHTML= "if for while and so on, variables declared in {...} are also only visible inside: " + phrase;
// }
//         console.log(phrase)
//         document.getElementById("bob6").innerHTML= "if for while and so on, variables declared in {...} are also only visible inside: " + phrase; 
        
//for and while loops, variables declared in {...} are also only visible inside:
    // for (i= 0; i< 3; i++){
    //     alert(i);
    // }
    //     alert(i);

//Nested functions. A function is called “nested” when it is created inside another function!!
// let firstName= "roy";
// let lastName= "rogers";
        //function sayHiBi(firstName, lastName) {
        // let firstName= "roy";
        // let lastName= "rogers";
        //function getFullName(){
        // let firstName= "roy";                    //only when variables declared here does it work - why?
        // let lastName= "rogers";
    //         return firstName + " " + lastName;
    //     }
    //         document.getElementById("bob8").innerHTML= ("Hello and Goodbye " + getFullName());
    //         alert("Hello, " + getFullName());
    //         alert("Bye, " + getFullName());
    // }
    //          sayHiBi();

//More Nested -  a nested function can be returned: either as a property of a new object 
//or as a result by itself. It can then be used somewhere else. No matter where, 
//it still has access to the same outer variables.
    // function makeCounter(){ "use strict"
    //     let count= 0;
    //     return function(){
    //         return count++;
    //     };   
    // }
    //     let counter= makeCounter();
    //     alert (counter());
    //     alert (counter());
    //     alert (counter());
    //     alert (counter());
    //     alert (counter());
    //     alert (counter());
    //     alert (counter());
    //     alert (counter());
    //     alert (counter());

//Now see explanation!
//Step 1. Variables
    // let phrase= "Hello";
    // alert (phrase);
    // console.log(phrase);
    // document.getElementById("bob9a").innerHTML= "The variable 'phrase' contains: " + phrase;
//Step 2. Function Declarations
//When a Lexical Environment is created, a Function Declaration immediately becomes a ready-to-use function (unlike let, that is unusable till the declaration).
    // let phrase = "Hello";
    // function say(name){
    //     return (`${phrase}, ${name}`);
    // }
    //     console.log(say("John"));
    //     document.getElementById("bob9b").innerHTML= "Wow, Lexical Environment: " + say("John");
//Step 3. Inner and outer Lexical Environment
    // let phrase= "Hello";
    // function say(name){ "use strict"
    //     //alert(`${phrase}, ${name}`);
    //     return (`${phrase}, ${name}`);
    // }
    //     //say("John");
    //      document.getElementById("bob9").innerHTML= "The phrase is: " + say("John");
         
//Step 4. Returning a function - Yeah another counter exercise!
    // function makeCounter(){
    //     let count= 0;
    //     return function(){
    //         return count++;
    //     }
    // }
    //     let counter= makeCounter();
    //     alert (counter());
    //     alert (counter());
    //     alert (counter());
    //     alert (counter());
    //     alert (counter());
    //     alert (counter());
    //     alert (counter());

//Info - Closure
//Info - Garbage collection
//Info - Real-life optimizations
//Exercises - Tasks - incudes solutions!
//1 - Does a function pickup latest changes?
//2 - Which variables are available?
//3 - Are counters independent?
//4 - Counter object
//5 - Function in if
//6 - Sum with closures
//7 - Is variable visible?
//8 - Filter through function
//9 - Sort by field
//10 - Army of functions






