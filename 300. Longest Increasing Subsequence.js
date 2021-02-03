/**
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
 */
/**
 * Algorithm: DP
 * 1. Declare a stages[n] store longest length that ends with nums[i]
 * 2. Each stage has only one state (longest length ends with nums[i]), and 
 *    the optimal state comes from max(state in previous stages).
 * 3. Moreover, we can compare only stage that nums[j] < nums[i]
 * 4. Iterate stages and update the state in each stage -> O(n^2)
 * 5. Iterate stages and return the largest answer.
 * 
 * T: O(n^2)
 * S: O(n^2)
 */
/**
 * @param {number[]} nums
 * @return {number}
//  */
const lengthOfLIS = nums => {
  let stages = new Array(nums.length).fill(1);
  for (let end = 0; end < nums.length; end += 1) {
    for (let start = 0; start < end; start += 1) {
      if (nums[end] > nums[start]) {
        stages[end] = Math.max(stages[end], stages[start] + 1);
      }
    }
  }
  return Math.max(...stages);
};

/**
 * Return all possible longest increasing subsequence path:
 * 1. Need 3D array stages
 * 2. Each stage has multiple states
 * 3. Each state is an array contains all valid elements LIS
 * 
 * T: O(n^3) * O(n) (copy new LIS) = O(n^4)
 * S: O(n^3)
 */
/**
 * Leetcode Fundamental: 12/13 Update
 * Brute Force Traversing all possible LIS starts from nums[i] also cost O(n^2)
 * Need to use Binary Search to get a better solution.
 * 
 * Patience Sorting: Greedy Algorithm
 * https://leetcode.com/problems/longest-increasing-subsequence/discuss/74824/JavaPython-Binary-search-O(nlogn)-time-with-explanation
 * https://www.cs.princeton.edu/courses/archive/spring13/cos423/lectures/LongestIncreasingSubsequence.pdf
 * 
 * 1. Let result array stores smallest last number in cell i.
 * 2. Cell i represent as smallest last number in length i.
 * 3. For each num, search for the smallest number in result that greater than num, result[i] = num.
 * 4. return result.length as the length of longest increawsing subsequence.
 * T: O(nlogn)
 * S: O(n)
 */
function lengthOfLIS(nums) {
  const result = [];
  for (const num of nums) {
    const insert_index = lowerBound(result, num);
    if (insert_index === result.length) result.push(num);
    else result[insert_index] = num; 
  }
  return result.length;
}

function lowerBound(A, T) {
  let N = A.length,
      start = 0,
      end = N;
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (A[mid] < T)
      start = mid + 1;
    else
      end = mid;
  }
  return start;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 4
console.log(lengthOfLIS([0,1,0,3,2,3])); // 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); // 1