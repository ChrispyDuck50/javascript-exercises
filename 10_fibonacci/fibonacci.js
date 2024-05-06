const fibonacci = function(sequenceInput) {

    if (typeof sequenceInput === 'string') {
        sequenceNum = parseInt(sequenceInput);
    }
    else {
        sequenceNum = sequenceInput;
    }
    
    if (sequenceNum == 0) {
        return 0;
    }
    if (sequenceNum < 0) {
        return 'OOPS';
    }
    
    firstPrev = 0;
    secondPrev = 1;

    for (i = 1; i < sequenceNum; i++) {
        current = firstPrev + secondPrev;
        firstPrev = secondPrev;
        secondPrev = current;
    }

    return secondPrev;
};

// Do not edit below this line
module.exports = fibonacci;
