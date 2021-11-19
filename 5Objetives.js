
// OBJECTIVES

//INTRODUCING - CONTAINERS THAT CAN STORE DATA
// KEY VALUE PAIRS TO STORE THE DATA

// EXEMPLES:


//  const cafe= {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpeacialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "tea"
//         "Hot chocolate"
//     ]

// // }


// const person = {
//     name: "Dayane",
//     age: 27,
//     hobbies:[
//         "watch movies",
//         "read books",
//         "hiking",
//     ]

// }
// person.favSongs = ["Justin Timberlake - Mirros"]
// console.log(person.name);



// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffer:true,
//     drinks: ["Cappucino", "latte","filer coffee", "tea","hot"],
//     breakfastOffer: "Free croissant with coffee.",
//     lunchOffer: "Free drink with surprisingly priced sandwich.",
//     noOffer: "Sorry no offer.",
// openCafe(){
//     if(this.hasSpecialOffers){
//         return "Time for a special offer";
//     }
// },

// closeCafe(){
//     return "we are closed, come back tomorrow"
// },

// console.log(cafe.openCafe());

// }
// if (time < 1100){
// offer = cafe.breakfastOffer;
// console.log(cafe.breakfastOffer);
// } else if (time < 1500){
// offer = cafe.lunchOffer;
// console.log(cafe.lunchOffer);
// }

// let day = "Sunday"
// const alarm = {
//     weekendAlarm: "No alarm needed",
//     weekDayAlarm: "get up at 7am",
// }
// if (day == "Saturday"|| day == "Sunday"){


// }



// // ACTIVITY 1 
// const person = {
//     name: "Dayane",
//     age: 27,
//     hobbies:["watch movies", "read books","hiking"],
//     personFavSongs: ["Justin Timberlake - Mirros"],
//     openCafe () {
//         if (this.name) {
//             return `Hello my name is ${this.name}`
//         }
// }
// };
// console.log (person.openCafe())

// // ACTIVITY 2 


// let drinking = "water"
// let eating = "treats"

// const pet = {
//     name: "Bred",
//     typeOfPet: "dog",
//     age: "7 years old",
//     colour: "grey",
// dogEat () {
//     if (this.name) 
//     return `my dog ${this.name} is eating`
// },
// dogDrink () {
//     return `my dog ${this.name} is drinking`

// }
// }

// console.log(my dog, ${this.name} is drinking)
///


// /// activity 3 
// const coffeeShop = {
//     branch: "gregs",
//     drinks: ["cappuccino", "americano", "expresso"],
//     food:  ["sanduiche", "sausage roll"],
//     prices: 10,

// drinksOrdered () {
//     if (this.drinks){
//         return `your order is ${this.drinks} + ${this.prices} `;
//     }
    
// },
// foodOrdered () {
//     if (this.food){
//         return `you order is ${this.food}+ £ ${this.prices}``;
//     }

// },
// };
// console.log(coffeeShop.drinksOrdered);
// coffeeShop.drinksOrdered();
// coffeeShop.foodOrdered();

// ACTIVITY 3 CORRECT 

// const coffeeShop = {
//     branch: "Allerton Rd, Liverpool",
//     drinks: [
//         "Cortado", 2.99,
//         "Flat White", 2.75,
//         "Americano", 2.50,
//         "Filter Coffee", 1.50,
//         "Tea", 1.50,
//         "Sparkling Water", 1.50,
//         "Still Water", 1,
//         "Apple Juice", 1,
//     ],
//     food: [
//         "2 slices Plain Toast(with butter)",1.50,
//         "Eggs on Toast", 2.50,
//         "Eggs and Beans on Toast", 3.50,
//         "Vegan Sausage Roll", 2.99,
//         "Hummus and Bread", 3.75,
//     ],
// drinksOrdered(){
//     if (this.drinks);
//     return `Your drinks order is ${this.drinks[4]}:£${this.drinks[5]} and ${this.drinks[8]}:£${this.drinks[9]}`
// },
// foodOrdered (){
//     if (this.food);
//     return `Your food order is ${this.food[0]}:£${this.food[1]} and ${this.food[8]}:£${this.food[9]}`
// },
//     total(){
//     return `Your total order comes to £ ${this.drinks[5]+ this.drinks[9]+ this.food[1]+ this.food[9]}`
// },
// }
// console.log(coffeeShop.drinksOrdered())
// console.log(coffeeShop.foodOrdered())
// console.log(coffeeShop.total())
