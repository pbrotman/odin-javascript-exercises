const removeFromArray = function(inArray, ...itemsToRemove) {
    outArray = [];
    
    for (const itemArray of inArray) {
        keep = true;
        for (const itemRemove of itemsToRemove) {
            if (itemArray === itemRemove){
                keep = false;
            }
        }
        if(keep) {
            outArray.push(itemArray);
        }
    }
    
    return outArray;
};

// Do not edit below this line
module.exports = removeFromArray;
