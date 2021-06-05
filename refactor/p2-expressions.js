/*
    CIT 281 Project 2
    Name: Emily Lashchuk
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {return Math.floor(Math.random() * (max - min) + min);};


const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
}

console.log(result);


//Returns a single, random, lowercase letter
const getRandomLetter = function() {let result = ""; const alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); for (let i = 0; i < 1; i++) {result += alphabet[getRandomInteger(1,alphabet.length-1)];}; return result;};

console.log(getRandomLetter());


//Give a minimum and maximum length and function returns a string of random letters at length between specified minimum and maximum
const getRandomString = function(minLength, maxLength) {let result = []; for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) { result.push(getRandomLetter());}; return result.join("");};

console.log(getRandomString(10, 20));


//You input a string and function returns letters from string in alphabetical order
const getSortedString = function(string) {let sortStrin = string.split(""); sortStrin.sort(); return sortStrin.join("");};

console.log(getSortedString("park"));

