// VARIABLES

// Let example that will work
//let age = 27;
//console.log(age);
//age = 30;
//console.log(age);

// Const Example that wont work
//const age = 27;
//console.log(age);
//age = 30;
//console.log(age);

// Arithmetic Operators
//let age = 27
//console.log(age)

//let i = 10;
//i = i + 2;
// i = 12

// Assignment Operators
//let i = 10
//i += 2;
// i = 12


// let weather = "2";

// if (1+1 == 2 ) {
//     console.log( "Well, I better wear some suncream!" )
// } else if ( weather == "rainy" ) 
// console.log( "better take an umbrela" )
//     else {
//         console.log( "hmmm, it could go either way" ) 
// }

// let place = "Manc";
// let weather = "Cloudy";

// if (place == "Manc" && weather == "Sunny") {
//     console.log("Check again");
// }
// else if (place == "Manc" && weather == "Rain") {
//     console.log("Obvs");
// }
// else {
//     console.log("what it ins't raining");
// }




//camelCase - first letter down and second UPCASE
//let favouriteDrink = "Coffee"; 
//console.log(favouriteDrink);
//console.log("My favourite drink is " + favouriteDrink);

// +++++++++++++++++++ACTIVITY 1 DAY 2++++++++++++++++++++++++++++++
//Template literals
//let name = "Dayane";
//let age = 27;
//let favDrink = "coffee";

//console.log(`My name is ${name}. I am ${age} and my favourite drink is ${favDrink}.`)
//age = 28
//favDrink = 'Tea'

//if else condition
//if(condition){
//do this
//}
//else if (condition2){
//do this
//}
//Else {

//}

// let weather = "rainy";

// if (weather == "sunny" ) {
//     console.log( "Well, I better wear some suncream!" )
// } else if ( weather == "rainy" ) 
// console.log( "better take an umbrela" )
//     else {
//         console.log( "hmmm, it could go either way" ) 
// }

//let name = "Dayane";
//let age = 27;
//let favColour = "green";

//console.log(`My name is ${name}. I am ${age} and my favourite colour is ${favColour}.`)

//let breakfast = "banana";
//let lunch = "rice and meat";
//let dinner = "soup";

//console.log (`My today breakfast was ${breakfast}, my lunch will be ${lunch} and my dinner will be ${dinner}.`)
//breakfast = "yogurt"
//lunch = "chicken"
//dinner = "soup"

//console.log (`My tomorrow breakfast will be ${breakfast}, my lunch will be ${lunch} and my dinner will be ${dinner}.`)

// ACTIVITY 1 DAY 2 1.3 -------------

// let age = 2;
// if (age >= 17) {
//    console.log("yes I can serve you");
// } else {
//    console.log ("you arent old enough");
// }

// let age = 2;
// let country = "UK"
// if (age >= 17 && country == "UK") {
//    console.log("yes I can serve you");
// } else {
//   console.log ("you arent old enough")
// }

// let age = 10;
// let location = "Germany";

// if (age >= 21 && location == "USA") {
//   console.log("Here's a drink");
// } else if (age >= 16 && location == "Germany") {
//   console.log("Here's a drink");
// } else if (age >= 18) {
//   console.log("Here's a drink");
// } else {
//   console.log("Sorry, no drinks for minors");
// }

//--------------------------------------------------------------


// activity 2 day 2 --------

// let Topping = "ham"
// switch (Topping) {
//   case "cheese":
//     case "sauce":
//       case "tomatoes":
//         case "pineapples":
//           console.log(`these ${Topping} are important ingredients for my pizza`);
// break;
// case "anchovies":
//   case "peperoni":
//     console.log(`these ${Topping} I don't like in my pizza`);
//     break;
//     default:
//       console.log(`these ${Topping} I could eat on my pizza`);
//       break;

// }
//------------------------------------------------

//------------------ ACTIVITY 3 ------------

// let password = "dada3344";
// if (password.length < 8){
//     console.log("your password is too short");
// } else { 
//     console.log("your password is great");
// }

//Stretch

// let num = 37;
// if (num % 3 == 0 && num % 5 == 0) {
//     console.log(`${num} is divisible by 3 or 5`);
// } else {
//     console.log(`${num} is not divisible by 3 or 5`);
// }

// ---------- activity 4 ----------


// let num = 36;
// if (num % 5 == 0 && num % 3 == 0) {
//   console.log("fizz buzz");
// } else if (num % 5 == 0) {
//   console.log("buzz");
// } else if (num % 3 == 0) {
//   console.log("fizz");
// } else {
//   console.log(`${num} number is not divisible by 3 or 5`);
// }

// let num = 15;
// switch(true) {
//     case num % 5 == 0 && num % 3 == 0:
//     console.log("Fizz Buzz.")
//     break;
// case num % 3 == 0:
//     console.log("fizz.")
//     break;
// case num % 5 == 0:
//     console.log("buzz")
//     break;
//     default:
//         console.log("this number is not divisible by 3 or 5")
// }

// ACTIVITY 5 ---------------

// let num = "4554";
// let numString = num.toString();
// let reverseNumString = numString.split('').reverse().join('');

// if (num ==reverseNumString){
//     console.log(`yes ${num} is a palindrome`)
//     } else {
//         console.log(` no ${num}is not a palindrome`)
//     }


// // ACTIVITY 6 

// let time = 8;
// let placeOfWork = "Manchester";
// let townOfHome = "Newton";
// if (time == 7) {
//     console.log(`I'm at home in ${townOfHome}`);
// }else if (time == 8) {
//     console.log(`I'm commuting to work in ${placeOfWork}`);
// } else {
//     console.log(`I'm working in ${placeOfWork} between 9 and 5`)
// }

/// ACTIVITY 7 ------------------------
// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;

// for (let i = 0; i < vowelArr.length; i++){
// console.log(string.lastIndexOf(vowelArr[i]));

//     index = string.lastIndexOf(vowelArr[i]);
// if (index >= highestIndex ){
//     highestIndex = index;
//     lastVowel = vowelArr[i];
// }
// }

// console.log(lastVowel); 
// console.log(highestIndex)


// // ACTIVITY 8 -----------------------
// let word = "evening";
// if (word.charAt(0) == word.charAt(word.length-1)){
//   console.log("True")
// } else {
//   console.log("False")
// }

// // ACTIVITY 9 --------------------
// let num1 = 7;
// let num2 = 7;
// let sum = num1 + num2;

// if (sum % 2 == 0){
//   console.log(`The sum = ${sum} and is even.`)
// } else {
//   console.log(`${num1 * num2}`)
// }

