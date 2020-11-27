// variables have var at the beginning
var myName = "Libery";
console.log(myName);
var sent;
sent = "My name is"
console.log(sent + myName)

// Note that the semiColons are optional but it is a great practice to include them. 

// Arrays
 /*Arrays
JavaScript can hold an array of variables in an Array object. In JavaScript, an array also functions as a list, a stack or a queue.

To define an array, either use the brackets notation or the Array object notation:
*/

var myArray = [1, 2, 3];
var theSameArray = new Array(1, 2, 3);
/*
Addressing
We can use the brackets [] operator to address a specific cell in our array. Addressing uses zero-based indices, so for example, in myArray the 2nd member can be addressed with index 1. One of the benefits of using an array datastructure is that you have constant time look-up, if you already know the index of the element you are trying to access.

console.log(myArray[1]);      // prints out 2
Arrays in JavaScript are sparse, meaning that we can also assign variables to random locations even though previous cells were undefined. For example:
*/
var myArray = []
myArray[3] = "hello"
console.log(myArray);
/*
Will print out:

[undefined, undefined, undefined, "hello"]
Array Elements
Because JavaScript Arrays are just special kinds of objects, you can have elements of different types stored together in the same array. The example below is an array with a string, a number, and an empty object.

var myArray = ["string", 10, {}]*/

var numsNames = [0,1,2,"Liberty"];
console.log(numsNames);

var objArray  = new Array (1,2,3) // this is another way of declaring an array
console.log(objArray)


// Array Manipulation
// can use push and pop (easy way to make an array work like a Stack)
//
var stack_arr = new Array(1,2,3,4)
stack_arr.pop()
console.log(stack_arr)
stack_arr.push(90) // adding new items to a list
console.log(stack_arr)

