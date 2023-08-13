const removeFromArray = function(array, ...toRemove) {


    // make a new array that will only get values we don't want to remove
    return array.filter(element => !toRemove.includes(element)); 


};

removeFromArray([1, 2, 3, 4], 3, 2)


// Do not edit below this line
module.exports = removeFromArray;
