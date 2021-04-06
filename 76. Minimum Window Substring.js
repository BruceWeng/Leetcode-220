/**
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (t.length > s.length) return "";

  let end = 0;
  let start = 0;
  let map = {};
  for (let char of t) {
    map[char] = (!(char in map)) 
      ? 1 
      : map[char] + 1;
  }

  let counter = Object.keys(map).length;
  let length = s.length + 1;
  let head = 0;

  while (end < s.length) {
    let endChar = s[end];
    if (endChar in map) map[endChar] = map[endChar] - 1;
    if (endChar in map && map[endChar] === 0) counter -= 1

    // end += 1; not to increase end here
    // end only moves when find at least one candidate answer

    while (counter === 0) {
      if (end - start + 1 < length) {
        length = end - start + 1;
        head = start;
      }
      let startChar = s[start];
      map[startChar] += 1;
      if (map[startChar] > 0) counter += 1;

      start += 1;
    }
    end += 1;
  }

  if (length === s.length + 1) return "";
  return s.slice(head, head + length);
};