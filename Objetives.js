
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


/// activity 3 
const coffeeShop = {
    branch: "gregs",
    drinks: ["cappuccino", "americano", "expresso"],
    food:  ["sanduiche", "sausage roll"],
    prices: 10,

drinksOrdered () {
    return "your order is "this.drinks" + "this.food";
}


}