/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  if(x === undefined) return 0;
  let sign = 1;
  if(x < 0) {
    sign = -1;
    x *= -1;
  }
  let result = 0;
  let temp = 0;
  while(x != 0) {
    temp = x % 10;
    x = Math.floor(x/10);
    result = 10 * result + temp;
  }
  result *= sign;
  if(result > 2**31 || result < -(2**31)-1) return 0;
  return result;
};