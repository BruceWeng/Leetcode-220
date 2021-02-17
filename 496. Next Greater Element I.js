/**
 * You are given two integer arrays nums1 and nums2 both of unique elements, where nums1 is a subset of nums2.
 * 
 * Find all the next greater numbers for nums1's elements in the corresponding places of nums2.
 * 
 * The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. 
 * 
 * If it does not exist, return -1 for this number.
 */

console.log(nextGreaterElement([4,1,2], [1,3,4,2])); // [-1,3,-1]
console.log(nextGreaterElement([2,4], [1,2,3,4])); // [3,-1]

// Decreasing stack
function nextGreaterElement(nums1, nums2) {
  const stack = [];
  const memo = {}; // <elment, nextGreaterElement>
  const result = [];
  for (const num of nums2) {
    while (stack.length !== 0 && stack[stack.length-1] < num) {
      // num is next greater element of stack.top
      const top = stack.pop()
      memo[top] = num;
    }
    stack.push(num);
  }
  for (const num of nums1) {
    if (memo[num] === undefined) result.push(-1);
    else result.push(memo[num]);
  }
  return result;
}