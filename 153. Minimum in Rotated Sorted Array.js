/**
 * Note:
 * 1. Binary Search
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums === null || nums.length === 0) {
      return null;
    }
  
    var start = 0;
    var end = nums.length - 1;
    while(start + 1 < end) {
      var mid = start + ((end - start) >> 1);
      [start, end] = nextRange(start, end, mid, nums)
    }
  
    return (nums[start] <= nums[end]) 
      ? nums[start]
      : nums[end];
  };
  
  function nextRange(start, end, mid, nums) {
    if (nums[mid] <= nums[end]) return [start, mid]
    return [mid, end]
  }