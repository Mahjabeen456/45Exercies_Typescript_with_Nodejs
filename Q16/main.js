/*Q16:More Guests: You just found a bigger dinner table,
 so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end
 of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new
 guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
var guestList = ['Sana', 'Any', 'Umaima', 'Yusra'];
var dontCome = "sana";
var newGuest = "sumya";
guestList[0] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log('Dear friend:' + guestList[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
}
console.log("friends . ".concat(dontCome, "' will not coming tomorrow dinner.'\n "));
console.log('Good News! We Find Big Table So We are inviting 3 more guests.\n');
guestList.unshift('Adil');
guestList.splice(2, 0, 'Azeem');
guestList.push('Ali');
for (var i = 0; i < guestList.length; i++) {
    console.log('Dear friend.' + guestList[i] + ',\nwe invited you on dinner tomorrow.\nThank You\n');
}
