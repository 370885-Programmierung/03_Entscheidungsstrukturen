"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
const ageJohn = 25;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

/****************** IF ******************/
//TINA --> There Is No Alternative
// entweder JA oder nix ... alternativlos
// if(true)
// if(false)
// if(isJohnOlder)

// if(ageJohn > ageMark)
// {
//    console.log("John ist älter.")
// }

if (isJohnOlder) {
    console.log("John ist älter.")
} else {
    console.log("John ist jünger.")
}