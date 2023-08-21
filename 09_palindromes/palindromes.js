const reverseString = function(word) {

    let wordReversedArray = word.split("") 
    let arrayReversed = wordReversedArray.reverse(); 

    return arrayReversed.join("")

};


const palindromes = function (string) {

    let trimString = string.replace(/\s/g, '').trim().toLowerCase().replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, " ").toLowerCase(); 
    let reversedString = reverseString(string).replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, " ").toLowerCase().trim().replace(/\s/g, '');

    if (trimString === reversedString) return true; 

    return false; 

};

palindromes('Animal loots foliated detail of stool lamina.')

// Do not edit below this line
module.exports = palindromes;
