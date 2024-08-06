/*Q37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
message that reads I love TypeScript. Make a large shirt and a medium shirt with the default
message, and a shirt of any size with a different message.*/
function make_shirt(size, printMassage) {
    if (size === void 0) { size = "Large"; }
    if (printMassage === void 0) { printMassage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " Shirt With the ").concat(printMassage, " Prints on Shirt"));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I Love TypeScript");
