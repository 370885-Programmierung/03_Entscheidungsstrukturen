"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
// const ageJohn = 30;
// const ageMark = 30;

// let ageJohn = prompt("Wie alt ist John?")

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

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

// if (isJohnOlder) {
//     console.log("John ist älter.")
// } else {
//     console.log("John ist jünger.")
// }

// ternary Schreibweise
// console.log((isJohnOlder) ? "John ist älter." : "John ist jünger.")

// if (isJohnOlder) {
//     console.log("John ist älter.")
// } else if (isJohnEqual) { //1. Alternative
//     console.log("John ist gleich alt.")
// } //Evtl. weitere Alternativen können mit weiteren else if -Bedinungen eingefügt werden
// else {
//     console.log("John ist jünger.")
// }

// const firstName = "Jane";
// let job;



// job = "driver";     // .. fährt TAXI! / UBER
// // job = "diver";      // .. taucht im Rhein!
// // job = "artist";     // .. malt ein Bild!
// // job = "pilot";      // .. macht etwas anderes! --> default
// // job = "teacher";    // .. unterrichtet!
// // job = "instructor";  // .. unterrichtet!

// switch(job) {
//     case "driver":
//         console.log(firstName + " fährt Taxi");
//         break;
//      case "diver":
//         console.log(firstName + " taucht im Rhein");
//         break;                      
//     case "artist":
//         console.log(firstName + " malt ein Bild");
//         break;                        
//     case "teacher":
//     case "instructor":
//         console.log(firstName + " unterrichtet");
//         break;   
//     default:
//         console.log(firstName + " macht was unbekanntes");
//         break;    
// }

/********  Fallunterscheidung / SWITCH|CASE 2 *******/



const cond = true;
const a = 2;



switch (cond) {
    case (a == 1):
        console.log("a ist gleich 1")
        break;
    case (a == 2):
        console.log("a ist gleich 2")
        break;
    default:
        console.log("a hat einen anderen Wert")
        break;
}