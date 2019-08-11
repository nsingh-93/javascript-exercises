const removeFromArray = function(...args) {
    let arr = args[0];
    return arr.filter(x => !args.includes(x));
}

module.exports = removeFromArray
