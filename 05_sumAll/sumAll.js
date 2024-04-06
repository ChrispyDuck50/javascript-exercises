const sumAll = function(num1, num2) {
    if ((typeof num1 != "number") || (typeof num2 != "number"))
    {
        return "ERROR"
    } else if ((num1 < 0) || (num2 < 0))
    {
        return "ERROR"
    }

    let lowest = Math.min(num1, num2);
    let highest = Math.max(num1, num2);
    let sum = 0;

    for (i = lowest; i<= highest; i++)
    {
        sum += i;
    }

    return sum

};

// Do not edit below this line
module.exports = sumAll;
