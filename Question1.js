var probabilities = [
    0.15, // A
    0.20, // B
    0.25, // C
    0.40  // D
];
var values = [
    'A', // 0.15
    'B', // 0.20
    'C', // 0.25
    'D'  // 0.40
];

/**
 * Returns A, B, C, D values by specified probabilities
 */
function random() {
    var num = Math.random(),
        lastIndex = probabilities.length - 1;
        s = 0;

    for (var i = 0; i < lastIndex; ++i) {
        s += probabilities[i];
        if (num < s) {
            return values[i];
        }
    }

    return values[lastIndex];
};

if(typeof module === 'object' && module && typeof module.exports === 'object') {
     module.exports = random;
} else {
    window.random = random;
}
