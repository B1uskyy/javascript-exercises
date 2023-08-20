function getAge (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

const findTheOldest = function(peopleArray) {

    newArr = [peopleArray[0]]

    for (let i = 1; i < peopleArray.length; i++) {
        if (getAge(peopleArray[i].yearOfDeath, peopleArray[i].yearOfBirth) > 0)
        newArr = peopleArray[i]; 
    }
    
    return newArr; 

};




// Do not edit below this line
module.exports = findTheOldest;
