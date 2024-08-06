/*Q19:Dinner Guests: Working with one of the programs from Exercises 14 through
 18, print a message indicating the number of people you are inviting to dinner.*/
var guest_list = ['Sana', 'Any', 'Umaima', 'Sumya'];
console.log("\nI am inviting ".concat(guest_list.length, " number of friends to my dinner which are following\n"));
for (var i = 0; i < guest_list.length; i++) {
    console.log("".concat(i + 1, ". ").concat(guest_list[i]));
}
