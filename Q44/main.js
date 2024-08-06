/*Q44:Sandwiches: Write a function that accepts a array of items a person
wants on a sandwich. The function should have one parameter that collects
as many items as the function call provides, and it should print a summary
of the sandwich that is being ordered. Call the function three times, using
a different number of arguments each time.*/
function makeSendwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log(("\nMaking a sandwich with the following items: \n"));
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\nNow Enjoy Sandwich");
}
makeSendwich("Chicken", "Cheese", "Mayo", "Egg");
makeSendwich("Bread", "Butter");
makeSendwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chickan", "Lottuce", "Tomato");
