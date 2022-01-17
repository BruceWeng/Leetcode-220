/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  if(height === undefined || height.length < 2) return 0;
  let maxArea = 0,
      left = 0,
      right = height.length-1;
  while(left < right) {
    maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right-left));
    if(height[left] < height[right]) left++;
    else right--;
  }
  return maxArea;
};