/*Q24:More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/


let apple ="apple";
let upperCaseApple = "Apple";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];

// Tests for equality and inequality with strings

console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

//  Tests using the lower case function

console.log("\nIs Apple is equal to apple after coverting to lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("\nIs Apple is not equal to apple after coverting to lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");

//Numerical tests
//Equal to

console.log("/n Is ten is equal to twenty?");
console.log(ten == twenty);

// Not Equal 
console.log("/n Is ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than 
console.log("/n Is ten is greater than Zero?");
console.log(ten > 0);

//Less than
console.log("/n Is twenty is less than 10");
console.log(twenty < 10);

//Greater than or equal to
console.log("/nIs ten is greater than or equal to 5?");
console.log(ten >=  5);

//Less than or equal to
console.log("/nIs twenty is Less than or equal to 10?");
console.log(twenty <=  10);


















