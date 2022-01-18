/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
  function helper(i, j, cache={}) {
    let key = `${i},${j}`;
    if(key in cache) return cache[key];
    if(i < 0 || j < 0) return 0;
    if(text1[i] === text2[j]) {
      return cache[key] = helper(i-1, j-1, cache)+1;
    }
    return cache[key] = Math.max(helper(i-1, j, cache), helper(i, j-1, cache));
  }
  return helper(text1.length-1, text2.length-1);
};