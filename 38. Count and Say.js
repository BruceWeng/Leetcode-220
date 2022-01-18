/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
  if(n <= 0) return '';
  
  let start = '1';
  for(let i=0; i<n-1; i++) start = helper(start);
  
  return start;
};

// Convert to a question with input string "1".
// Receive string and return next string.
function helper(string) {
  let result = '',
      count = 1;
  string += '#';
  
  for(let i=0; i<string.length-1; i++) {
    if(string[i] === string[i+1]) {
      count++;
      continue;
    }
    else {
      result += String(count) + string[i];
      count = 1;
    }
  }
  
  return result;
}