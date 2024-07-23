const palindromes = function (word) {
    word = word.toUpperCase().replace(/[^0-9A-Z]/g,"");
    console.log(word);
    if(word.length <= 1){
        return true;
    } else {
        if(word[0] === word[word.length-1]){
            return palindromes(word.substr(1, word.length-2));
        } else {
            return false;
        }
    }
};

// Do not edit below this line
module.exports = palindromes;
