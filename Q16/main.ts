/*Q16:More Guests: You just found a bigger dinner table,
 so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end
 of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new
 guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/

let guestList: string[] = ['Sana','Any','Umaima','Yusra'];

let dontCome: string = "sana";

let  newGuest: string = "sumya";

guestList[0] = newGuest;

for(let i=0; i<guestList.length; i++){

    console.log('Dear friend:' + guestList[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
    
}
console.log(`friends . ${dontCome}' will not coming tomorrow dinner.'\n `);

console.log('Good News! We Find Big Table So We are inviting 3 more guests.\n');

guestList.unshift('Adil');
guestList.splice(2 , 0 , 'Azeem');
guestList.push('Ali');

for(let i=0; i<guestList.length; i++){

    console.log('Dear friend.' + guestList[i] + ',\nwe invited you on dinner tomorrow.\nThank You\n');
    
}




    




    
