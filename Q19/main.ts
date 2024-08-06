/*Q19:Dinner Guests: Working with one of the programs from Exercises 14 through
 18, print a message indicating the number of people you are inviting to dinner.*/

let guest_list: string[] = ['Sana','Any','Umaima','Sumya'];

console.log(`\nI am inviting ${guest_list.length} number of friends to my dinner which are following\n`);

for(let i=0; i<guest_list.length; i++){
    console.log(`${i + 1}. ${guest_list[i]}`);
}
