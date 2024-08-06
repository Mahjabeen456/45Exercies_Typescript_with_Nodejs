/*Q29:Favorite Fruit: Make a array of your favorite fruits, and then write a series
 of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit
is in your array. If the fruit is in your array, the if block should print a
statement, such as You really like bananas!*/
// Creatina a Array
var favorite_fruits = ["Apple", "Bananas", "Orange"];
//using 5 Independent If statments
if (favorite_fruits.includes("Apple")) {
    console.log("I Really Like Apple");
}
if (favorite_fruits.includes("Mango")) {
    console.log("I Really Like Mango");
}
if (favorite_fruits.includes("pineapple")) {
    console.log("I Really Like pineapple");
}
if (favorite_fruits.includes("Orange")) {
    console.log("I Really Like Orange");
}
if (favorite_fruits.includes("Bananas")) {
    console.log("I Really Like Bananas");
}
