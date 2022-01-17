/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  if(s===undefined) return '';
  let result = '';
  for (let i=0; i<s.length; i++) {
    let newPalindrome1 = newPalindrome(s, i, i);
    let newPalindrome2 = newPalindrome(s, i, i+1);
    if(newPalindrome1.length > result.length) result = newPalindrome1;
    if(newPalindrome2.length > result.length) result = newPalindrome2;
  }
  return result;
};

function newPalindrome(s, start, end) {
  while(start >= 0 && end < s.length && s[start] === s[end]) {
    start--;
    end++;
  }
  return s.slice(start+1, end);
}