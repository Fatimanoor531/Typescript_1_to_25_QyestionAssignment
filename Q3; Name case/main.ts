//lower case
let personName: string = "fatima noor"
console.log("lowerCase:", personName.toLowerCase());

//upper case
console.log("uppercase:", personName.toUpperCase());

//title case
console.log("titleCase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));