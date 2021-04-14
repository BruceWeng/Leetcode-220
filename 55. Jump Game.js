/**
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 */
const nums1 = [2,3,1,1,4]
console.log(canJump(nums1)) // true
const nums2 = [3,2,1,0,4]
console.log(canJump(nums2)) // false

function canJump(nums) {
  const dp = Array(nums.length).fill(false) // dp[i] stores if it's possible to reach from first index
  dp[0] = true
  for(let i=0; i<nums.length; i++) {
    if(dp[i]===true && i+nums[i]>=dp.length-1) return true
    if(dp[i]===true) for(let j=1; j<=nums[i]; j++) dp[i+j] = true
  }
  return dp[dp.length-1]
}