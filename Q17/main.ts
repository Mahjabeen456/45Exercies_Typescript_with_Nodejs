/*Q17:Shrinking Guest List: You just found out that your new dinner table won’t
 arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message
 saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in yourlist.
  Each time you pop a name from your list, print a message to that person letting them
   know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list,
 letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make 
sure you actually have an empty list at the end of your program.*/

let guest_List: string[] = ['Sana','Any','Umaima','yusra'];

let not_present : string = 'Sana';

let new_friend : string = 'Sumya';

 guest_List[0] = new_friend;
 
 guest_List.unshift('Adil','Azeem','Ali');
 console.log('\nunfortunatly we can not arrange big table . only two people allow.');

 while(guest_List.length>2){
    let remove_guest = guest_List.pop();

    console.log(`\nSorry Dear friends. ${remove_guest} you are not invited for dinner.`);
    
 }

 for(let i=0; i<guest_List.length; i++){
    console.log('\nDear friends .' + guest_List[i] + ',\nYes you are still invited on tomorrow dinner.\nThank You\n');
}

guest_List.splice(0,2)
console.log(guest_List);

 





    