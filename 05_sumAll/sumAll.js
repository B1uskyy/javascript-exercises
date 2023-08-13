const sumAll = function(initial, final) {

let totalSum = 0; 


if (initial > final) {

    for (let i = initial; i >= final; i--) {
        totalSum += i; 
    }

}

else {
    for (let i = initial; i <= final; i++) {
        totalSum += i; 
    }
}



if (totalSum < 0) {
    return "ERROR";
}

if (!(Number.isInteger(final)) || !(Number.isInteger(initial))) {
    return "ERROR";
}

return totalSum; 



};

// Do not edit below this line
module.exports = sumAll;
