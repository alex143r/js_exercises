"use strict";

const name = "Peter Heronimous Lind";
const firstName = name.split(' ')[0];
console.log(firstName);
const middleName = name.split(' ')[1];
console.log(middleName);
const lastName = name.split(' ')[2];
console.log(lastName);

const name2 = "Alexander Obel Tyllesen";

const indexSpace1 = name2.indexOf(" ");
const first2 = name2.substring(0, indexSpace1);

const indexSpace2 = name2.lastIndexOf(" ");
const middle2 = name2.substring(indexSpace1 + 1, indexSpace2);

const last2 = name2.substring(indexSpace2 + 1);
console.log(first2);
console.log(middle2);
console.log(last2);