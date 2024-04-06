const repeatString = function(string, num) {
    if (num<0)
    {
        return "ERROR"
    }
    let i = 0;
    let output = "";
    while (i < num)
    {
        output += string;
        i++;
    }
    return output

};

// Do not edit below this line
module.exports = repeatString;
