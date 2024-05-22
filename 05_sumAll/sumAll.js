const sumAll = function(num1, num2) {

    function isInvalid(num){
        if ((num < 0) || !Number.isInteger(num)){
            return true;
        }
    }
    if (isInvalid(num1) || isInvalid(num2)){
        return "ERROR"
    }

    let sum = 0;
    let floor = Math.min(num1, num2);
    let ceil = Math.max(num1, num2);

    for (let i = floor; i < ceil+1; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
