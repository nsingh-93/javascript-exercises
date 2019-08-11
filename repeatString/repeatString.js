const repeatString = function(word, number) {
    if(number < 0)
    {
        return "ERROR";
    }

    let returnString = "";
    let i = 0;
    while (i < number) {
        returnString += word;
        i++;
    }

    return returnString;
}

module.exports = repeatString
