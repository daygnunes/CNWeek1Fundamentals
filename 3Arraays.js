// --------- ARRAYS

// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];

// console.log(coffeeOrder);

// console.log(coffeeOrder[2]);

// LAST LINE DONT NEED COMA , 
// javascript start to count on 0 not 1, so if I want 
//to access the 2nd item, will be 1 not 2

// //UPDATE ARRAYS
// console.log(coffeeOrder)
// coffeeOrder [1] = "Ann - Vanilla latte"

//PROPERTY ON ARRAYS
// TO DO LIST .LENGTH ON AN ARRAY 

//methods 
// .push method to add something in the end on an array
// let coffeeOrder = [
// "Alex - Cortado",
// "Ben - Cortado",
// "Charlie - Whatever's new"
// ];

// coffeeOrder.push("Donna - espresso");

// // .pop method inform the last item on an array 
// // let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];
// coffeeOrder.pop();

// let favSongs =[
// "Justin Timberlake - Mirros",
// "Nick Jonas - This is Heaven",
// "Elevation Workship - Talking to Jesus"

// console.log(favSongs)

// favouriteSongs.push("Nick Jonas - This is Heaven");

// ]


// ------ LOOPS -----
// let favDrinks =[
// "beer",
// "marguerita",
// "wine"
// ]
// console.log(favDrinks);


// let favDrinks =[
//     "beer",
//     "marguerita",
//     "wine"
//     ];
// for (let i = 0; i < favDrinks.length; i++){

//     console.log(favDrinks[i]);
// }

// // while LOOPS
// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade") {
// console.log(currentCard);
// currentCard = cards [Math.floor(Math.random()*4)];

// }

// console.log(currentCard);
/*
ACTIVITY 1
/ Create an array that lists your favourite films, up to
5 elements.
Add 2 more using a method.
Use a loop to cycle through the array
*/

// let favMovies = [
//     "Eternals",
//     "007 no time to die",
//     "Station 19",
//     "How I met your mother",
//     "Friends"
// ];

// favMovies[5] =  "die hard";
// console.log(favMovies[5]);
// favMovies[6] =  "red notice";
// console.log(favMovies[6]);
// console.log(favMovies.length);

// for (let i = 0; i < favMovies.length; i++){
// console.log(favMovies[i]);

// }

// ACTIVITY 2

// let arr = [];
// while (arr.length < 6 ) {
//     let r = Math.floor(Math.random() * 50) + 1;
//     if (arr.indexOf(r) === -1) arr.push(r);
// }
// console.log(arr);

// ACTIVITY 3

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// nao deu certo 
// for (let i = 0; i < 10; i--){
//     console.log(i);
// }

// let i = 4
// while (i < 10)
// {
//     console.log(i);
// i--
// }

// for (let i = 10; i >= 0; i=i-1) 
//     console.log(i);



let movies = [
    "007 no time to die",
    "Eternals",
    "Ghostbusters",
    "Red notice"
];
for (let i = 0; i < movies.length; i++){
    if (i = 1){
        console.log("YAY It's my favorite movie.")
    } else 
    console.log("Boooo we want Ghostbusters" )
}





