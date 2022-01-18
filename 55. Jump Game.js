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

/**
Algorithm1:
Bottom Up Brute Force:
0. Declare reach(bool[n]) to store if the current index can be reached from
previous indexes

1. Declare two pointers, i = 0 and j = 1, use two loops to validate indicate all
the possible, steps before A[i] that can be reach from j. (reach[i+j] = ture)

2. return reach[n-1]

T: O(n^2)
S: O(n)
Input: [2, 3, 1, 1, 4]

i = 0, j = 1 -> 2:
[2, 3, 1, 1, 4]
 ^
 i
reach: [true, true, true, false, false]
                ^     ^
i = 1, j = 1 -> 3:
[2, 3, 1, 1, 4]
    ^
    i
reach = [true, true, true, true, true]
                       ^     ^     ^

Algorithm2:
Buttom Up Memorization:
Modify Algo1, the reach array must be a continuous true array, store only the farest index
1. Declare k as the farest index
2. k = max(k, i + j), since k stores the max index and max index comes from i + A[i]:
k = max(k, i + A[i])

T: O(n)
S: O(1)

 * @param {number[]} nums 
 * @returns {boolean}
 */
function canJump(nums) {
  if(nums === undefined || nums.length === 0) return false;
  
  let k = 0;
  
  for(let i=0; i<nums.length; i++) {
    if(i <= k) k = Math.max(k, i+nums[i]);
  }
  
  return k >= nums.length-1;
}