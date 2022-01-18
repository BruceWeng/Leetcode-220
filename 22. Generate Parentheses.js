/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  if(n === 0) return [];
  
  let result = [];
  
  dfs(n, n, '', result);
  return result;
};

function dfs(left, right, current, result) {
  if(left === 0 && right === 0) {
    result.push(current);
    return;
  }
  if(left > 0) dfs(left-1, right, current+'(', result);
  if(right > left) dfs(left, right-1, current+')', result);
}