const sumAll = function(start, end) {
    let sum = 0;

    if (typeof(start) == "number" && typeof(end) == "number") {
        if (start < 0 || end < 0) {
            return "ERROR";
        }
        else {
            let min = Math.min(start, end);
            let max = Math.max(start, end);

            for (let i = min; i <= max; i++) {
                sum += i;
            }
        }
    }
    else {
        return "ERROR";
    }
    
    return sum;
}

module.exports = sumAll
