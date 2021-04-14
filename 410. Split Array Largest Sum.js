/**
 * Given an array nums which consists of non-negative integers and an integer m, 
 * you can split the array into m non-empty continuous subarrays.
 * 
 * Write an algorithm to minimize the largest sum among these m subarrays.
 */
const nums1 = [7,2,5,10,8], m1 = 2
const nums2 = [1,2,3,4,5], m2 = 2
const nums3 = [1,4,4], m3 = 3
console.log(splitArray(nums1, m1)) // 18
console.log(splitArray(nums2, m2)) // 9
console.log(splitArray(nums3, m3)) // 4

function splitArray(nums, m) {
  if(nums==null || !Array.isArray(nums) || nums.length===0
    || m==null || m<0) return null
  let start = Math.max(...nums), end = nums.reduce((a, b) => a+b, 0)
  while(start<end) {
    let mid = start+((end-start)>>1)
    if(feasible(mid, nums, m)) end = mid
    else start = mid+1
  }
  return start
}

function feasible(capacity, nums, m) {
  let split = 1, total = 0
  for(let num of nums) {
    total+=num
    if(total>capacity) {
      total = num
      split++
    }
    if(split>m) return false
  }
  return true
}