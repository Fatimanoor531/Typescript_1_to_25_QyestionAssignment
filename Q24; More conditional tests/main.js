"use strict";
let car = "subaru";
let age = 25;
let numbers = [1, 2, 3, 4];
//string test
//Inequality
console.log("Is car != 'toyota'? I predict true.");
console.log(car != "toyota");
//Inequality
console.log("Is car != 'subaru'? I predict false.");
console.log(car != "subaru");
//lower function case
console.log("Is car.toLowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == "subaru");
//lower function case
console.log("Is car !== car.toLowerCase(?) 'subaru'? I predict false.");
console.log(car !== car.toLowerCase());
//numerical test:
//Equality
console.log("Is age == 25? I predict true.");
console.log(age == 25);
//Enequality
console.log("Is age == 30? I predict false.");
console.log(age == 30);
//Greater then
console.log("Is age > 23? I predict true.");
console.log(age > 23);
//less then
console.log("Is age < 23? I predict false.");
console.log(age < 23);
//less then or equal
console.log("Is age <= 23? I predict false.");
console.log(age <= 23);
//Greater then or equal
console.log("Is age >= 22? I predict true.");
console.log(age >= 22);
//logical operators
console.log("Is age > 20 && age < 30? I predict true.");
console.log(age > 20 && age < 30);
console.log("Is age > 30 || age < 18? I predict false.");
console.log(age > 30 || age < 18);
//Array tests
console.log("Is 3 in numbers? I predict true.");
console.log(3 in numbers);
console.log("Is 5 not in numbers? I predict false.");
console.log(5 in numbers);
