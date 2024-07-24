const findTheOldest = function(people) {
    let oldestPerson = people[0];
    people.forEach(person => {
        if (person.yearOfDeath !== undefined){
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = (new Date()).getFullYear() - person.yearOfBirth;
        }
        if (person.age > oldestPerson.age) {oldestPerson = person};
    })
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
