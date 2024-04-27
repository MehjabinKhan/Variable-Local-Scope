"use strict";
//              Variable Scope
// Variable Scope also called global variable
let age = 18;
if (true) {
    console.log(age);
}
console.log(age);
let myName = "Mehjabin";
if (true) {
    console.log(myName);
}
//               Local Scope
//  Local Scope also called Local Variable
if (true) {
    let task = "Learn typescript";
    console.log(task);
}
if (true) {
    let dailyPrayers = 5;
    console.log(dailyPrayers);
}
