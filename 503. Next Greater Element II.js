/**
 * Given a circular array (the next element of the last element is the first element of the array), 
 * print the Next Greater Number for every element. 
 * 
 * The Next Greater Number of a number x is the first greater number to 
 * its traversing-order next in the array, which means you could search 
 * circularly to find its next greater number. If it doesn't exist, output -1 for this number.
 */
console.log(nextGreaterElements([1,2,1])); // [2,-1,2]

// Decreasing stack
// Loop twice (circular problem equal to loop nums2 = [...nums, ...nums])
// Store index in stack
function nextGreaterElements(nums) {
  const stack = [];
  const n = nums.length;
  const result = new Array(n).fill(-1);;
  for (let i = 0; i < n*2; i++) {
    while (stack.length !== 0 && nums[stack[stack.length-1]] < nums[i%n]) {
      const top = stack.pop();
      result[top] = nums[i%n];
    }
    stack.push(i%n);
  }
  return result;
}