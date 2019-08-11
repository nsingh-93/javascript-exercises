const reverseString = function(message) {
    let reverseString = [];
    let len = message.length;

    for (let i = 0; i <= len; i++) {
        reverseString.push(message[len - i]);
    }

    reverseString.splice(0, 1);

    return reverseString.join("");
}

module.exports = reverseString
