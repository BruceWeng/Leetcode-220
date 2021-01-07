/**
Given an array of integers and an integer k, you need to find the total number of 
continuous subarrays whose sum equals to k.

Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
 */

/**
 * Reduced Brute Force
 * Add the sum of subarray in end index loop
 * 
 * T: O(n^2)
 * S: O(1)
 * Runtime: 304 ms
 */
// const subarraySum = (nums, k) => {
//   if (nums === undefined || nums.length === 0 || k === undefined) return 0;
  
//   let n = nums.length;
//   let result = 0;
//   for (let i = 0; i < n; i += 1) { // start index of subarray
//     let sum = 0;
//     for (let j = i; j < n; j += 1) { // end index of subarray (include!!!)
//       sum += nums[j];
//       if (sum === k) result += 1;
//     }
//   }

//   return result;
// };

/**
 * Reduce Brute Force(PrefixSum) + 2 Sum(HashMap)
 * Whenever the sums has increased by a value of k, we've found a subarray of sums=k.
 * Store how many remainder(prefix_sum[i]-k) occured in nums in memo.
 * Each prefix_sum[i] can be future remainder.
 * T: O(n)
 * S: O(n)
 * Runtime: 96 ms
 */
const subarraySum = (nums, k) => {
  if (nums.length === 0) return 0;

  // key: remainder, value: count, (Put remainder in memo, check prefix_sum[i]-k in memo)
  let memo = {
    0: 1 // if prefix_sum == k, prefix_sum-k == 0, add <remainder:0, count:1> to include thise valid case.
  }; 

  let remainder = 0;
  let result = 0;
  for (const num of nums) {
    remainder += num;
    if ((remainder - k) in memo) result += memo[remainder - k]; // Find match, Update result

    if (remainder in memo) memo[remainder] += 1; // Old remainder, Update memo
    else memo[remainder] = 1; // New remainder (remainder not in memo), Update memo
  }
  return result;
};

console.log(subarraySum([1,1,1], 2)); // 2
console.log(subarraySum([1, -1, 2, -1, 1, 1], 2)); // 6 

/**
 * Why can't be solved with 2 pointer/sliding window?
 * By the time your right pointer moves to an index j, you should guarantee that there are no other solutions 
 * found in from left pointer i < j -1 to right pointer j - 1. 
 * However, if the array contains negatives, this case will happen.
 */