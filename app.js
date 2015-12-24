var random = require('./Question1');
var fibonacci = require('./Question2');
var getTwoBiggest = require('./Question3');



var res_a = 0,
    res_b = 0,
    res_c = 0,
    res_d = 0
    res_curr = '';

for(var i=0; i<100; i++){
    res_curr = random();
    if(res_curr === 'A') res_a += 1;
    if(res_curr === 'B') res_b += 1;
    if(res_curr === 'C') res_c += 1;
    if(res_curr === 'D') res_d += 1;
}

console.log('A Probability : ' + res_a);
console.log('B Probability : ' + res_b);
console.log('C Probability : ' + res_c);
console.log('D Probability : ' + res_d);
console.log('');


console.log('fibonacci(10) : ' + fibonacci(10)); 
console.log('fibonacci(20) : ' + fibonacci(20));
console.log('');

var input = [9, 1, 8, 2, 7, 3, 6, 4, 5];
console.log('Integer array : ' + input);
console.log('Two biggest of array : ' + getTwoBiggest(input));