const removeFromArray = function(array, ...toBeRemoved) {
    let newArray = array
    for (const arg of toBeRemoved)
    {
        newArray = newArray.filter(val => val !== arg)
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
