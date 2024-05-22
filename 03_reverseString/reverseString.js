const reverseString = function(in_string) {
    length = in_string.length;
    out_string = "";
    for (const idx in in_string) {
        // Index string characters from back to front.
        out_string += in_string[length-idx-1];
    }
    return out_string;
};

// Do not edit below this line
module.exports = reverseString;
