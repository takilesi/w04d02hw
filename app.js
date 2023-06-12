
// 1. How do we assign a value to a variable?
let aa = 10 
// How do we change the value of a variable?
aa = 20
// How do we assign an existing variable to a new variable?
let bb = aa 
// Remind me, what are declare, assign, and define?

var firstName;   // Declaration 
aa = 10             // Initialization (assignment using =)
let cc = 10;        // Define + declaration, Initialization, and Assignment 

// What is pseudocoding and why should you do it?
let pseudocode = "create an outline or rough draft"  //ensure understanding of a software project's requirements and align code accordingly.

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
let time = "90%"


// Create a variable called firstVariable
var firstVariable; 
// Assign it the value of the string "Hello World"
firstVariable = "Hello World"
// Change the value of this variable to some number
firstVariable = 20
// Store the value of firstVariablein a new variable called secondVariable
var secondVariable = firstVariable
// Change the value of secondVariableto any string.
secondVariable = "Cat"
// What is the value of firstVariable?
    // 20
// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
var yourName = "Jean Valjean"
var concatenate = "Hello, my name is: " + yourName // thank you very much Victor Hugo

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow"
// Write code that will print out "mooooo" if the it is equal to cow
if (animal == "cow"){
    console.log("mooooo")
}
animal = "cat"
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
if (animal == "cow"){
    console.log("mooooo")
}else {
    console.log("Hey! You're not a cow.")
}
// Commit