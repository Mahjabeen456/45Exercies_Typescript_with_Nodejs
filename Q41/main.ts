/*Q41:Magicians: Make a array of magician’s names. Pass the array to a function called 
show_magicians(), which prints the name of each magician in the array.*/


function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

let magician_name = ["Harry Poter", "Adil", "Hassan","Ali"]

show_magicians(magician_name);