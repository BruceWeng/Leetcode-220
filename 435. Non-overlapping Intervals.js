/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => a[1] - b[1]); // sorted by end

  let count = 0;
  let prev_end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    // Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.
    if (prev_end <= intervals[i][0]) { // non-overlapping
      prev_end = intervals[i][1]; // Given sorted by end, intervals[i].end must be greater than prevEnd
    } else {
      count++;
    }
  }

  return count;  
};