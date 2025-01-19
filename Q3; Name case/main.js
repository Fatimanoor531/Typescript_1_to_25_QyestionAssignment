"use strict";
//lower case
let personName = "fatima noor";
console.log("lowerCase:", personName.toLowerCase());
//upper case
console.log("uppercase:", personName.toLocaleUpperCase());
//title case
console.log("titleCase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
