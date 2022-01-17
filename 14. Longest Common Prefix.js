/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  if(strs === undefined || strs.length === 0) return '';
  
  let result = '',
      prefix = strs.reduce((a, b) => a.length <= b.length ? a : b);
  
  for(let i=0; i<prefix.length; i++) {
    result = prefix.slice(0, i+1);
    for(let str of strs) {
      if(result === str.slice(0, i+1)) continue;
      else return prefix.slice(0, i);
    }
  }
  return result;
};