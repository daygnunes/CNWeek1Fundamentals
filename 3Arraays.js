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

//ACTIVITY 3 DAY 3 - 1.4  +++++++++++++++++++++++

// for (let i = 9; i>=0; i--){
//   console.log(i)
// }

//ACTIVITY 4 DAY 3 - 1.4  +++++++++++++++++++++++

// let movies = [
//     "007 no time to die",
//     "Eternals",
//     "Ghostbusters",
//     "Red notice"
// ];
// for (let i = 0; i < movies.length; i++){
//     if (i = 1){
//         console.log("YAY It's my favorite movie.")
//     } else 
//     console.log("Boooo we want Ghostbusters" )




// let movies = [
//     "007 no time to die",
//     "Eternals",
//     "Ghostbusters",
//     "Red notice"
// ];
// for (let i = 0; i < movies.length; i++){
//     if (i = 1){
//         console.log("YAY It's my favorite movie.")
//     } else 
//     console.log("Boooo we want Ghostbusters" )
// }


//ACTIVITY 5 DAY 3 - 1.4  +++++++++++++++++++++++


// let num = Math.floor(Math.random() * 30)
// for (let i = 0; i < 6; i++){
//   console.log(num)
//   if (num % 7 == 0){
//     console.log(` ----- ${num} is divisble by 7!`)
//   }
//   num = Math.floor(Math.random() * 30)
// }


//ACTIVITY 6 DAY 3 - 1.4  +++++++++++++++++++++++

// // Activity 6 
// let chrisFollowers = ['Ben', 'Jordan', 'Dan', 'John'];
// let johnFollowers = ['Chris', 'Jordan', 'Dan', 'Ben'];
// for (let i = 0; i<chrisFollowers.length; i++){
//   for (let j = 0; j<johnFollowers.length; j++){
//     }
//     if (chrisFollowers[i] === johnFollowers[i]){
//         console.log(`${chrisFollowers[i]} is in both arrays!`)
//   }
// }

//ACTIVITY 7 DAY 3 - 1.4  +++++++++++++++++++++++


// // Activity 7
// let result = '';
// let i = 0;
// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);
// console.log(result);

// let age=24;
// if(age>18){
// console.log(`${age} - £8`)

// } else if (age>18){
// console.log(`${age} - £10.95`)
// }
// else {
// console.log(`${age} -£7.50`)
// }

// let favSongs = [
//     "Grace",
//     "Something",
//     "Stairway To Heaven"
// ];

// console.log(favSongs[0]);
// console.log(favSongs[1]);
// console.log(favSongs[2]);

//ACTIVITY 1 DAY 4 - 1.5  +++++++++++++++++++++++
// const factorial = (n) => {
//     if ((n === 0) || (n === 1)){
//         return 1;
//     } else {
//         return (n * factorial (n-1));
//     }
// }
// console.log(factorial(33));

//ACTIVITY 2 DAY 4 - 1.5  +++++++++++++++++++++++
// const takeOrder = (topping1, topping2) => {
//   console.log(`Pizza with ${topping1} & ${topping2}`);
//   orderCount++
// }

// console.log(takeOrder("Ham", "Pineapple"));
// console.log(orderCount);

//ACTIVITY 3 DAY 4 - 1.5  +++++++++++++++++++++++
// const cashWithdrawal = (amount, accnum) => {
// console.log(`withdrawing £ ${amount} from account ${accnum}`);

// }
// //arguments
// cashWithdrawal (300, 500002203);
// cashWithdrawal (1100, 554334344);

// //global variable
// let accNumber = 22938298329
// let accNumber = 21921928191

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`withdrawing £ ${amount} from account ${accnum}`);
    
//     }
//     //arguments
//     cashWithdrawal (300, accNumber);
//     cashWithdrawal (1100, accNumber);
