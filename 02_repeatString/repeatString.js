const repeatString = function(string, number) {


    if (number < 0) return "ERROR"; 

    else {
        let returnValue = string.repeat(number);
        return  returnValue; 
    }


};

repeatString("Hey", 3); 

// Do not edit below this line
module.exports = repeatString;
