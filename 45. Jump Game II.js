/**
 Algorithm: BFS, each node: (index, value)
                  node                      min_jump
                 (0, 2)                     [0, 0, 0, 0, 0]
               /        \
            (1, 3)      (2, 1)              [0, 1, 1, 0, 0]
          /    |    \        \
    (2, 1)  (3, 1)  (4, 4)  (3, 1)          [0, 1, 1, 2, 2]
       |       |    return 2   |
    (3, 1)  (4, 4)          (4, 4)
       |    return 3        return 3
    (4, 4)
    return 4

1. Decalre level = 0, curr_level_last_idx = 0, next_level_last_idx = 0
2. Iterate nums and update next_level_last_idx = Math.max(next_level_last_idx, nums[i] + 1)
    if next_level_last_idx reaches last index, return level + 1
3. If i > curr_level_last_idx: no solution, return -1
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
  if(nums.length <= 1) return 0;
  
  let level = 0,
      currentLevelLastIdx = 0, // Mark last element index in current level
      i = 0;
  
  while(i <= currentLevelLastIdx) {
    let nextLevelLastIdx = currentLevelLastIdx; // Mark last element index in next level
    while(i <= currentLevelLastIdx) {
      nextLevelLastIdx = Math.max(nextLevelLastIdx, nums[i]+i);
      if(nextLevelLastIdx >= nums.length-1) return level+1;
      i++;
    }
    level++;
    currentLevelLastIdx = nextLevelLastIdx;
  }
  return -1;
};