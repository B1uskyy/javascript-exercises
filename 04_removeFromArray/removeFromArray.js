const removeFromArray = function(array, objectToRemove) {


    let newArray = [array]; 
    let objectToRemoveArray = [objectToRemove];

    for (let i = 0; i < array.length; i++) {

        if (objectToRemoveArray.includes(array[i])) {
            newArray.pop(); 
        }
    }

    return newArray; 


};

// Do not edit below this line
module.exports = removeFromArray;
