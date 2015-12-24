/**
 * @param {Number} n, fibonacci index to be passed in.
 * Fibonacci 0 is 0
 * Fibonacci 1 and 2 are 1
 */
var fibonacci = function(n){
    if(isNaN(n)){
        throw new Error('Input must be Number');
    } else if(n < 0){
        throw new Error('Input at least must be 0');
    }
    
    if(n === 0) return 0;
    if(n === 1 || n === 2) return 1;
    
    var fib_arr = [1, 1];
    for(var i=2; i<n; i++){
        fib_arr[i] = fib_arr[fib_arr.length-1] + fib_arr[fib_arr.length-2];
    }
    return fib_arr[fib_arr.length-1];
}

if(typeof module === 'object' && module && typeof module.exports === 'object') {
     module.exports = fibonacci;
} else {
    window.fibonacci = fibonacci;
}



/* //For node.js
var fibonacci_basic = function(n) {
    if(n == 0) return 0;
    if(n <= 2) {
        return 1;
    } else {
        return fibonacci_basic(n - 1) + fibonacci_basic(n - 2);
    }
};
var fibonacci_basic_test1_start = process.hrtime();
var fibonacci_basic_test1_value = fibonacci_basic(10);
var fibonacci_basic_test1_diff = process.hrtime(fibonacci_basic_test1_start);

var fibonacci_test1_start = process.hrtime();
var fibonacci_test1_value = fibonacci(10);
var fibonacci_test1_diff = process.hrtime(fibonacci_test1_start);

var fibonacci_basic_test2_start = process.hrtime();
var fibonacci_basic_test2_value = fibonacci_basic(15);
var fibonacci_basic_test2_diff = process.hrtime(fibonacci_basic_test2_start);

var fibonacci_test2_start = process.hrtime();
var fibonacci_test2_value = fibonacci(15);
var fibonacci_test2_diff = process.hrtime(fibonacci_test2_start);

console.log('Test1');
console.log('fibonacci_basic(10) : ' + fibonacci_basic_test1_value + ', took ' + fibonacci_basic_test1_diff + ' ms.');
console.log('fibonacci(10)           : ' + fibonacci_test1_value + ', took ' + fibonacci_test1_diff + ' ms.');
console.log('Test1 Winner            : ' + (fibonacci_basic_test1_diff < fibonacci_test1_diff ? 'fibonacci_basic(10)' : 'fibonacci(10)'));

console.log('');

console.log('Test2');
console.log('fibonacci_basic(15) : ' + fibonacci_basic_test2_value + ', took ' + fibonacci_basic_test2_diff + ' ms.');
console.log('fibonacci(15)           : ' + fibonacci_test2_value + ', took ' + fibonacci_test2_diff + ' ms.');
console.log('Test2 Winner            : ' + (fibonacci_basic_test2_diff < fibonacci_test2_diff ? 'fibonacci_basic(15)' : 'fibonacci(15)'));
*/
