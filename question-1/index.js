/*
Question 1: ES6 Features
● Create a script with a function named lowerCaseWords that takes a
mixed array as input.
The function will do the following.
o return a promise that is resolved or rejected
o filter the non-strings and lower case the remaining words
*/
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"]

const lowerCaseWords = new Promise(function(resolve, reject){
    lowercaseinator = (word) => {
        return word.toLowerCase();
    }
    
    let wordsOnly = mixedArray.filter((value) => typeof value == "string")
    let lowers = wordsOnly.map(lowercaseinator)
    if (mixedArray.length > 0 ){
        resolve(lowers);
    }
    else{
        reject();
    }
})
lowerCaseWords.then(
    function(value) {
        console.log(value)
    },
    function(error){
        console.error("something went wrong")
    }
);

lowerCaseWords