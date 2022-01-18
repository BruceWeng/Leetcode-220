/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  if(nums === undefined || nums.length === 0 || target === undefined) return [-1, -1];
  
  let result = [],
      // Find left bound
      start = 0,
      end = nums.length-1;
  
  while(start+1 < end) {
    let mid = start + Math.floor((end-start) / 2);
    if(nums[mid] >= target) end = mid;
    else start = mid;
  }
  
  // Target not match
  if(nums[start] !== target && nums[end] !== target) return [-1, -1];
  
  if(nums[start] === target) result.push(start);
  else result.push(end);
  
  // Find right bound
  start = 0;
  end = nums.length-1;
  
  while(start+1 < end) {
    let mid = start + Math.floor((end-start) / 2);
    if(nums[mid] <= target) start = mid;
    else end = mid;
  }
  if(nums[end] === target) result.push(end);
  else result.push(start);
  
  return result;
};