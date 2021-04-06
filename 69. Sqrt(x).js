/**
 * Note:
 * 1. Binary Search:
 *  a. Do not use mid = (low + high) / 2, large low and high may cause overflow sum to a negative nubmer
 *  b. End while loop condition: low === high or low + 1 === high (need to stop to prevent infinite loop)
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }

    let low = 1;
    let high = x;

    while (low + 1 < high) {
        let mid = low + Math.floor((high - low) / 2);
        [low, high] = nextValue(x, low, high, mid)
    }

    return (low * low <= x) ? low : high
};

function nextValue(x, low, high, mid) {
    if (mid * mid <= x) return [mid, high]
    return [low, mid]
}