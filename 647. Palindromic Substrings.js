/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
  if(s === undefined || s.legnth === 0) return 0;
  
  let count = [0];
  
  for(let i=0; i<s.length; i++) {
    extendPalindrome(i, i, s, count); // Count odd length
    extendPalindrome(i, i+1, s, count); // Count event length
  }
  
  return count[0];
};

function extendPalindrome(left, right, s, count) {
  while(left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
    count[0]++;
  }
}