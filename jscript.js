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
"use strict"
    let message= "Hello";
    console.log(message);
    document.getElementById("bob4").innerHTML= "Using the first variable name, message is: " + message;

    let message= "Goodbye";
    console.log(message);
    document.getElementById("bob5").innerHTML= "Using the same variable name, message is: " + message;
