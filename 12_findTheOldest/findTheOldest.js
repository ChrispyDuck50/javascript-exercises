const findTheOldest = function(people) {
    const peopleAge = people.reduce((oldest, current) => {
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

        if (currentAge > oldestAge) {
            return current;
        }
        else {
            return oldest;
        }
    })

    return peopleAge;

    function getAge(birthYear, deathYear) {
        if (!deathYear) {
            currentYear = new Date().getFullYear();
            return currentYear - birthYear;
        }
        else {
            return deathYear - birthYear;
        }
    }


};

// Do not edit below this line
module.exports = findTheOldest;
