const fibonacci = function(n) {
    n = parseInt(n);
    if(n>2){
        return fibonacci(n-1) + fibonacci(n-2);
    } if(n>0){
        return 1;
    } if(n==0){
        return 0;
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
