/*Q14:Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d
like to invite to dinner. Then use your list to print a message to each person,
inviting them to dinner.*/
var guest_list = ['Sana', 'Any', 'Umaima', 'Yusra'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Friends:' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
}
