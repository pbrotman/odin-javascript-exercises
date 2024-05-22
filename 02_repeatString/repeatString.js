const repeatString = function(str, n) {
    joined_string = "";
    if (n<0) return "ERROR"
    for (let i = 0; i < n; i++) {
        joined_string += str;
    }
    return joined_string;
};

// Do not edit below this line
module.exports = repeatString;
