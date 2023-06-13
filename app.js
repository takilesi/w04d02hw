
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

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
let testPersonsAge = 15
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (testPersonsAge >= 16){
    console.log("Here are the keys!")
}else {
    console.log("Sorry, you're too young.")
}

// A. The basics LOOPS
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i=0; i<11; i++){
    console.log(i); 
}
// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i=10; i<401; i++){
    console.log(i); 
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i=12; i<4001; i++){
    if (i % 3 == 0){
        console.log(i); 
    }
}

// B. Get even
// Print out the numbers that are within the range of 1 - 100
for (let i=1; i<101; i++){
    console.log(i); 
}
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i=1; i<101; i++){
    if (i % 2 == 0){
        console.log(i + " is an even number");
    }else{
        console.log(i); 
    }
}

// Give me Five 
for (let i=1; i<101; i++){
    if (i % 5 == 0){
        console.log("I found a " + i + ". High five!"); 
    }
    if (i % 3 == 0) {
        console.log("I found a " + i + ". Three is a crowd!"); 
    }
}

// Savings account 
var bank_account = []
for (let i=1; i<11; i++){
    bank_account.push(i)
}
bank_account.push(55)
console.log(bank_account); 
// bonus
let bonus = 0
for (let i=0; i<101; i++){
    bonus = bonus + i 
}
console.log(bonus*2)

// Arrays and Control Flow 
let arraysContian = "elements"
// arrays order will not change by itself 
// 3. the names of my fish 

// B. Easy Does It 
let quotes = ["To be or not to be", "To thine own self be true", "Know thy self"]

const randomThings = [1, 10, "Hello", true]
console.log(randomThings[0])
randomThings[2] = "World"
console.log(randomThings)

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
console.log(ourClass[2])
ourClass[4] = "Octocat"
ourClass.push("Cloud City")
console.log(ourClass)
    
// E. Mix it up 

const myArray = [5, 10, 500, 20]
myArray.push("aegon")
myArray.push("fakahela")
myArray.shift()
myArray.unshift("Bob Marly")
console.log(myArray); 
myArray.pop(); 
console.log(myArray);
console.log(myArray.reverse()); // mutated array 

// F. Biggie Smalls 

let fun = 5
if (fun < 100){
    console.log("little number")
} else {
    console.log("big number")
}

// G
let g = 8
if ( g<5){
    console.log("little number")
}else if (g>10){
    console.log("big number")
} else {
    console.log("monkey"); 
}

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  console.log("Kristyn is rocking that " + kristynsCloset[2]); 
  kristynsCloset.splice(6, 0, "raybans")
console.log(kristynsCloset); 
kristynsCloset.splice(5, 1, "stained knit hat")
console.log(kristynsCloset); 
console.log(thomsCloset[0][0]); // first shirt 
console.log(thomsCloset[1][0]); // first pants 
console.log(thomsCloset[2][0]); // first accessory 
console.log("Tom looking good in his " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + " and " + thomsCloset[2][0]) + ".";
thomsCloset[1][2] = "Footie Pajamas"
console.log(thomsCloset); 

// Functions 
const printGreeting = (name) => {
    console.log("Hello there, "+name+"!"); 
}
printGreeting("Slimer");

const printCool = (name) => {
    console.log(name+" is cool"); 
}
printCool("Captain Reynolds")

const calculateCube = (num) => {
    console.log(num*num*num);
}
calculateCube(5); 

const isVowel = (vowelOrCons) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    console.log(vowels.includes(vowelOrCons))
}
isVowel("i"); 

const getTwoLengths = (str1, str2) => {
    let myArray = [str1.length]; 
    myArray.push(str2.length)
    console.log(myArray); 
}
getTwoLengths("a", "cat")

const getMultipleLengths = (strings) => {
    const lengths = []
    for (let i=0; i<strings.length; i++) {
        lengths.push(strings[i].length)
    }
    console.log(lengths); 
}
getMultipleLengths(["a", "cat", "licks", "itself", "contentedly"])

const maxOfThree = (a,b,c) => {
    if (a>b & a>c){
        console.log(a); 
    } else if (b>a & b>c){
        console.log(b);
    }else{
        console.log(c);
    }
}
maxOfThree(23,13,3); 


let longest = 0
let longestStr = ""
const printLongestWord = (stringy) => {
    for (i=0; i<stringy.length; i++){
        if (stringy[i].length > longest){
            longest = stringy[i].length
            longestStr = stringy[i]
        }
    }
    console.log(longestStr)
}
printLongestWord(["a", "cat", "licks", "itself", "wildly"])

// OBJECTS 

const user = {
    name: "Bart",
    email: "bart@google.com",
    age: 15,
    purchased: []
}
user.email = "bartholomew@google.com"
user.age++; 
user.location = "Pittsburgh"
user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")
console.log(user.purchased[2]); 

user.friend = {
    name: "Katie Hotpants",
    age: 41,
    location: "Tarentum", 
    purchased: []
}

console.log(user.friend.name); 
console.log(user.friend.location); 
user.friend.age=55
user.friend.purchased.push("The One Ring")
user.friend.purchased.push("A latte")


// LOOPS 

user.purchased.forEach(purchased => console.log(purchased));

const updateUser = () => {
    user.age++
    user.name = user.name.toUpperCase(); 
}
updateUser(); 
console.log(user); 


const oldAndLoud = (person) => {
    person.age++
    person.name = person.name.toUpperCase(); 
}
oldAndLoud("user"); 

console.log(user); 