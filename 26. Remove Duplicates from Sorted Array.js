/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  if(nums === undefined || nums.length === 0) return 0;
  if(nums.length === 1) return 1;
  
  let insertIndex = 1;
  
  for(let i=1; i<nums.length; i++) {
    if(nums[i] === nums[i-1]) continue;
    else {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }
  return insertIndex;
};