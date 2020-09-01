"use strict";
const name = "Peter";

const lowercase = name.toLowerCase();
console.log(lowercase);
const thirdL = name.substring(2, 3);
const thirdCap = thirdL.toUpperCase();
console.log(thirdCap);
console.log()
const firstL = lowercase.substring(0, 2);
const lastLetters = lowercase.substring(3, 5);
console.log(firstL + thirdCap + lastLetters);