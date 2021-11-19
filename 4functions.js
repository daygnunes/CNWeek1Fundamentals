//parametros
// function greet (name, lastName){
//     console.log('Hello' + 'name' + ' lastName');
// }

// //arguments
// greet('John', 'Smith');



// FUNCTIONS
//BREAK OUR CODE UP TO BE SMALLER MORE DRY

//declaring functions 
// const pressGrindBeans = () => {

//     console.log("Grinding for 20 seconds");
// }
// pressGrindBeans();

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }


// }

// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();

//PARAMETERS

// give functions flexibility

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




// const addUp = (num1, num2) => {
//     return num1 + num2;
// }
//this will not display the answers you have to console.log
// addUp(7,3);
//this will give the answers
// console.log(addUp(2,5));

// functions DECLARATION(1)

// function square(number){
//     return number * number;

// };

// square (5);

// arrow function syntax
// expression/anonymous function

// / ACTIVITY 1
// Take this code and turn it into arrow function syntax:
// function factorial (n) {
//     if ((n === 0) || (n === 1)){
//         return 1;
//     } else {
//         return (n * factorial (n-1));
//     }
// }
// console.log(factorial(33));

// ACTIVITY 1 PRONTA
const factorial = (n) => {
    if ((n === 0) || (n === 1)){
        return 1;
    } else {
        return (n * factorial (n-1));
    }
}
console.log(factorial(33));

// ACTIVITY 2

// ACTIVITY 3

