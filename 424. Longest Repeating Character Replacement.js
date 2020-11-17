/**
 * Sliding window
 * T: O(n), S: O(1)
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let len = s.length;
  let count = new Array(26).fill(0);
  let start = 0, max_count = 0, max_length = 0;
  for (let end = 0; end < len; end++) {
    max_count = Math.max(max_count, ++count[s[end].charCodeAt(0) - 'A'.charCodeAt(0)]);
    while (end - start + 1 - max_count > k) {
      count[s[start].charCodeAt(0) - 'A'.charCodeAt(0)]--;
      start++;
    }
    max_length = Math.max(max_length, end - start + 1);
  }
  return max_length;
};