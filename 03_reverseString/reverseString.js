const reverseString = function(regularString) {
    let stringLength = regularString.length;
    let invertedString = "";
    for (let i = stringLength-1; i > -1; i -= 1)
    {

        invertedString += regularString[i];

    };
    return invertedString
};

// Do not edit below this line
module.exports = reverseString;
