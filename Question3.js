/**
 * Returns two biggest values of passed Number of array.
 * Sorts the array(ascending), then returns last 2 item of sorted array.
 * @param {Array} items, Number array to be passed in.
 * 
 * 
 */
function getTwoBiggest(items) {    
    // Check all items is Number or not
    function isNumberArray(items){
        for(var i=0; i<items.length; i++){
            if(isNaN(items[i])){
                return false;
            }
        }
        return true;
    }
    
    if(!Array.isArray(items)){
        throw new Error('The input is not an array.');
    } else if(!isNumberArray(items)){
        throw new Error('Array items must be Number.');
    } else if(items.length < 2){
        throw new Error('Array length must be greater than 1');
    }
    
    var len = items.length,
        value, i, j;
    
    for (i=0; i < len; i++) {
        value = items[i];
        for (j=i-1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j];
        }
        items[j+1] = value;
    }
    return [items[len-1], items[len-2]];
}

if(typeof module === 'object' && module && typeof module.exports === 'object') {
     module.exports = getTwoBiggest;
} else {
    window.getTwoBiggest = getTwoBiggest;
}

/* ERROR CASES
var error1 = 'Kara';        // Not array
var error2 = [];            // Inadequate item count
var error3 = [1];           // Inadequate item count
var error4 = ['Kara'];      // Items must be Number
var error5 = [1, 'Kara'];   // Items must be Number

try {
    getTwoBiggest(error1);
} catch(e) {
    console.log(e.message);
}

try {
    getTwoBiggest(error2);
} catch(e) {
    console.log(e.message);
}

try {
    getTwoBiggest(error3);
} catch(e) {
    console.log(e.message);
}

try {
    getTwoBiggest(error4);
} catch(e) {
    console.log(e.message);
}

try {
    getTwoBiggest(error5);
} catch(e) {
    console.log(e.message);
}


var input = [9, 1, 8, 2, 7, 3, 6, 4, 5];
console.log(getTwoBiggest(input));*/

