function getAge (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

const findTheOldest = function(peopleArray) {

    let oldest = peopleArray[0]; 
    let oldestAge = getAge(peopleArray[0].yearOfBirth, peopleArray[0].yearOfDeath)
    

    for (let i = 1; i < peopleArray.length; i++) {

      if (getAge(peopleArray[i].yearOfBirth, peopleArray[i].yearOfDeath) > oldestAge) {
        oldest = peopleArray[i]; 
        oldestAge = getAge(peopleArray[i].yearOfBirth, peopleArray[i].yearOfDeath); 
      }


    }

    return oldest; 

};





// Do not edit below this line
module.exports = findTheOldest;
