const palindromes = function (sentence) {
    /// Convert all to lowercase.
    /// Convert the string to an array.
    /// Remove whitespace and punctuation.
    /// Rejoins into a string

    const allowedCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const sentenceForward = sentence
                            .toLowerCase()
                            .split('')
                            .filter(char => allowedCharacters.includes(char))
                            .join('');

    const sentenceBackward = sentenceForward
                            .split('')
                            .reverse()
                            .join('');

    if (sentenceForward === sentenceBackward) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
