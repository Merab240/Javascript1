console.log("Hello World");

//variable
//declaring variables using let, const, var
//var 
var name= "John";
console.log(name);

//let
//defining avariable
let age =38;
console.log(age);
//assigning avariable
age = 40;
console.log(age);

//const
const pi = 3.14;
console.log(pi);
 // datatypes string, number, boolean(true/false), Null, symbol, object
//string
//let name = "joan";
 //interger
let year = 2024;

//float
let price = 19.99;

//Boolean
let isLoggedIn = true;

//Null
let emptyValue = null;
console.log(emptyValue);
// object
let person ={
    firstname:"Jane",
    Lastname:"Deo",
    age: 25,
    student: true,
    price
};
console.log(person);
// array
let fruits = ["Apple", "Banana", "cherry"];
console.log(fruits);

let mixedArray = [1, "Hello", 2, "Good"];
console.log(mixedArray);

//concatinate: joining/combining variables
let surName ="Smith";
let givenName ="Molly";

const nameStatement = "My name is "+ surName + " " + givenName;
console.log(nameStatement);

//opperators
let x = 2;
let y = 10;
let z;

//Addition
z = x+y;
console.log(z);

//Substruction
z = y-2;
console.log(z);

//Division
z = y/x;
console.log(z);

//module, remainder
z = 10%2;
console.log(z);

//Multiplication
z = y*x;
console.log(z);

// increment
y++;
console.log(y);

// decrement
x--;
console.log(x);

//undefined
let m;
console.log(m);

//arrays
let num = [10,20,30,40];
let boys = ["Peter", "Simon","Luise","John"];
console.log(num);
console.log(boys);
console.log(boys[1]);
console.log("My name is " + boys[2] + " I am " + num[2] + " years");

// conditional statements
let score;
score = 85;
if(score >= 50){
    //if condition is true
  console.log("You have passed!");
}
else {
    // if condition is fales
    console.log("You have failed");
}
// equal to (==), strict equal to (===)
let value;
value = "10";
if (value === 10){
    // will not execute because the numbers have different datatypes
    console.log("value is exactly 10");
}

// not equal to (!=) strict not equal to (!==) 
let val;
val = 20;
if (val !== 15){
    console.log("not equal to");
}

// two or more conditions
let numb;
numb = 75;
if (numb > 95){
    console.log("Grade A");
}
 else if (numb >= 85){
    console.log("Grade B");
} 
else if (numb >=75){
    console.log("Grade C")
  
}else {
  console.log("You have failed");
}

// using arrays & If statements
let grade;
grade = [75,40,90,25];

// Functions
//declaring a function
function functionName() {
return " This is my function"
}
functionName();// calling a function
console.log();

//function with parameters
function greet(name){
    console.log("Hello, How are you " + name + "?");
}
greet("Brenda");
greet("Merab");

function add(a,b){
    return a+b;
}
let sum =add(5,10);

console.log(sum);
//console.log(add(2,10));

//functions that -/*...................
// function that adds - using function declaration

// calling a function inside of cosole.log
function add(a,b){
   return a + b;   
}
console.log("The total of a & b is: " + add(5,10));

//addition 
function adds(a,b){
console.log("The Total is:" + (a+b));
}
adds(20,5);


// fucntion for multiplication
function multiplication(a,b){
    return a*b;
}
console.log(multiplication(5,5));

// fucntion that substructs -using function expression
let sub = function(a,b){
 return a-b;
}
console.log(sub(10,2));

// fucntion that substructs
let div = function(a,b) {
    
   console.log(b/a);
}
div(2,100);

// Arrow functions
const multiplyFun =() => {
  console.log("this is ana rrow function");
  
}
//example
const multiplyArrow =(x,y) => x*y;
console.log(multiplyArrow(3,4));

const complexFunc =(a,b) => {
    let sum = a+b;
    let product = a*b;
    let diff = b-a;
    return{sum:sum, product, difference:diff};
}

console.log(complexFunc(5,6));

//Loops
//for loop
//pop, push. splice, shift-removes first element, unshift-
const colors = ["Red","Green", "Blue", "Red"];
   for (let i=0; i<colors.length; i++) {
       console.log(colors[i]);
        
   }

    // adding a parament to an array
    colors.push("Purple");
    console.log(colors);
    // colors.pop()-removes the last element from an array
    
//indexof()- helps get to know te index of an argument

let index =colors.indexOf("Blue")
console.log(index);// finding the index of avalue
//colors.splice(index,1);

// for loop with decrement
const numbers = [1,2,3,4,5,6,7,8,9,10];
//for (let i=10; i>=0; i--){
   // console.log(numbers[i]);
    
//}
//console.log(numbers.length);



// while loop
