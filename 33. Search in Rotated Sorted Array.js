/**
 * Note: Binary search
 *  1. Compare nums[mid] with nums[start] to check mid is in left or right side.
 *  2. Compare target, nums[start], nums[mid] in left side.
 *  3. Compare target, nums[end], nums[mid] in right side.
 *  4. Return mid when nums[mid] === target
 *  5. When there are only two elements in array, return start if nums[start] === target,
 *     return end if nums[end] === target.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums === null || nums.length === 0) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;
  while(start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    /**
     * 0. 6 conditions in total: can be reduce to 4 conditions
     * 1. Consider only both mid and target on the same side (left or right).
     *    Because if mid and target on the different side:
     *      a. mid(left), target(right): nums[mid] > target: start = mid, covered in else condition
     *      b. mid(right), target(left): nums[mid] <= target: end = mid, covered in else condition
     * 2. Check which side is mid first
     * 3. Check relation between target and mid
     */
    // if mid is on left side: nums[mid] > nums[start]
    if (nums[mid] > nums[start]) {
      // if target is on left side: target >= nums[start]
      if (target >= nums[start] && nums[mid] >= target) {
        // nums[mid] >= target (case 3)
        end = mid;
      } else {
        // nums[mid] < target (case 1, 4)
        start = mid;
      }
    // if mid is on right side: nums[mid] < nums[start]
    } else {
      // if target is on right side: target <= nums[end]
      if (target <= nums[end] && nums[mid] <= target) {
        // nums[mid] <= target (case 6)
        start = mid;
      } else {
        // nums[mid] > target (case 2, 5)
        end = mid;
      }
    }
  }

  if (nums[start] === target) {
    return start;
  }

  if (nums[end] === target) {
    return end;
  }

  return -1;
};
let test1 = [3, 5, 1];
console.log(search(test1, 1));// 1

/**
 * Leetcode Fundamental: 10/22 Update
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // Let start and end in the range boundary of binary search [start...end] (include target)
  let start = 0;
  let end = nums.length - 1;
  // while loop condition: 
  // Edge condition: the range[start...end] is size 2 and they happens to be the break point where nums[start] > nums[end],
  // still valid to reduce range to find the target without missing elements
  // true condition: while (start <= end)
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) return mid;
    
    if (target >= nums[0]) {
      if (nums[mid] >= nums[0]) {
        if (nums[mid] > target) end = mid - 1;
        else start = mid + 1;
      }
      else end = mid - 1;
    } 
    else if (target < nums[0]) {
      if (nums[mid] < nums[0]) {
        if (nums[mid] > target) end = mid - 1;
        else start = mid + 1;
      }
      else start = mid + 1;
    }
  }
  // the case that find the target: return mid
  // the target can either be in LHS: target >= nums[0]:
  // 1. if nums[mid] is in RHS (nums[mid] < nums[0]): end = mid-1
  // 2. if nums[mid] is in LHS (nums[mid] >= nums[0]): 
  //    if (nums[mid] > target): end = mid-1
  //    else: start = mid+1
  // the target be in RHS: target < nums[0]
  // 1. if nums[mid] is in LHS (nums[mid] >= nums[0]): start = mid+1
  // 2. if nums[mid] is in RHS (nums[mid] < nums[0]):
  //    if (nums[mid] > target): end = mid-1
  //    else: start = mid+1
  
  // handle target not found case
  return -1;
};

/**
 * Update: 2021/04/05
 */
// A >> 1 == Math.floor(A / 2)
function search(nums, target) {
  if (nums.length === 0) return -1;
  let start = 0;
  let end = nums.length - 1;
  if (target < nums[0]) {
    // right part
    while (start + 1 < end) {
      let mid = start + ((end - start) >> 1);
      if (nums[mid] === target) return mid;
      [start, end] = nextRightRange({nums, target, start, end, mid})
    }
  } 
  if (target >= nums[0]) {
    // left part
    while (start + 1 < end) {
      let mid = start + ((end - start) >> 1);
      if (nums[mid] === target) return mid;
      [start, end] = nextLeftRange({nums, target, start, end, mid})
    }
  }
  if (nums[start] === target) return start;
  if (nums[end] === target) return end;
  return -1;
}

function nextRightRange({nums, target, start, end, mid}) {
  let A = nums[mid] > target
  let B = nums[mid] > nums[0]
  if (A && B) return [mid + 1, end]
  if (A && !B) return [start, mid - 1]
  if (!A) return [mid + 1, end]
}

function nextLeftRange({nums, target, start, end, mid}) {
  let A = nums[mid] < nums[0]
  let B = nums[mid] > target
  if (A) return [start, mid - 1]
  if (!A && B) return [start, mid - 1]
  if (!A && !B) return [mid + 1, end]
}