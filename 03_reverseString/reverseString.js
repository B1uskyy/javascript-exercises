const reverseString = function(word) {

    let wordReversedArray = word.split(""); 
    let arrayReversed = wordReversedArray.reverse(); 

    return arrayReversed.join("")

};

// Do not edit below this line
module.exports = reverseString;
