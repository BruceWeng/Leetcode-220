/**
 * string1: "abb" -> string2: "ac"
 * 1. delete string1: "ab" -> "ac" (i-1, j)
 * 2. insert string1 aka delete string2: "abbc" -> "ac" = "abb" -> "a" (i, j-1)
 * 3. replace string1: "abc" -> "ac" = "ab" -> "a" (i-1, j-1)
 * 
 * Pattern:
 * 1. current char matech (replace string): dp[i][j] = dp[i-1][j-1]
 * 2. delete current char: find previous char state:
 *      a. delete char at string1: dp[i][j] = dp[i-1][j]
 *      b. delete chat at string2: dp[i][j] = dp[i][j-1]
 * 
 * DP Solution:
 * T: O(m*n)
 * S: O(m*n) -> O(min(m, n))
 * Runtime: 88 ms
 */
/**
 * Given two words word1 and word2, find the minimum number of operations 
 * required to convert word1 to word2.
 * 
 * @param {string} word1 
 * @param {string} word2 
 */
var minDistance = function (word1, word2) {
  let m = word1.length;
  let n = word2.length;

  let stages = []; // m as stages, n as states
  for (let i = 0; i < m + 1; i += 1) stages.push(new Array(n + 1).fill(0));

  // stages[i][j] = minDistance(word1[:i+1], word2[:j+1]) [Include word1[i] and word2[j]]
  for (let i = 0; i < m + 1; i += 1) {
    stages[i][0] = i;
  }

  for (let j = 0; j < n + 1; j += 1) {
    stages[0][j] = j;
  }

  for (let i = 1; i < m + 1; i += 1) {
    for (let j = 1; j < n + 1; j += 1) {
      let delta = (word1[i - 1] === word2[j - 1]) ? 0 : 1;
      stages[i][j] = Math.min(
        stages[i - 1][j - 1] + delta, // Replace
        stages[i - 1][j] + 1, // Delete
        stages[i][j - 1] + 1 // Insert
      );
    }
  }

  return stages[m][n];
};

let test2 = 'orange';
let test1 = 'apple';
console.log(minDistance(test1, test2)); // 5

/**
 * Leetcode Fundamental: 12/7 Update
 * 
 * Edit Distance >= ||word1| - |word2||
 * Hamming Distance: (only substute)
 * Edit Distance <= Hamming Distance
 * 
 * Recursive Solution:
 * 
 * word1: Ax
 * word2: By
 * 
 * edist(Ax, By) = min( edist(A, B) + delta(x, y), Replace
 *                      edist(Ax, B) + 1, Delete
 *                      edist(A, By) + 1 Insert
 *                    ) 
 * delta(x, y) = 0 if x = y, else 1
 * 
 * T: O( 3^min(len(word1), len(word2)) )
 * S: O(min(len(word1), len(word2))) , (depth of call stack)
 */
const edist = (word1, word2) => {
  let m = word1.length;
  let n = word2.length;
  if (m === 0) return n;
  if (n === 0) return m;

  let delta = (word1 === word2) ? 0 : 1;

  return Math.min(
    edist(word1.slice(0, m), word2.slice(0, n)) + delta, // Replace
    edist(word1.slice(0, m), word2) + 1, // Delete
    edist(word1, word2.slice(0, n) + 1) // Insert
  );
}
/**
 * 2020/12/13 Memoization
 * Base case:
 * 1. word1 = '', word2 = '' ->  i === word1.length && j === word2.length, return 0
 * 2. word1 = 'xyz', word2 = '' -> j === word2.length, return word1.length - i
 * 3. word2 = '', word2 = 'xyz' -> i === word1.length, return word2.length - j
 * 
 * Recursive case: 
 * 1. word1 = 'aX', word2 = 'aY' -> i += 1, j += 1, dist += 0
 * 2. word1 = 'aX', word2 = 'Y' -> i += 1, j, dist += 1 (delete)
 * 3. word1 = 'X', word2 = 'aY' -> i, j += 1, dist += 1 (insert)
 * 4. word1 = 'aX', word2 = 'bY' -> i += 1, j += 1, dist += 1 (update)
 * 
 * T: O(m*n)
 * S: O(min(m, n))
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2, i=0, j=0, memo={}) {
  let key = i + ',' + j;
  if (key in memo) return memo[key];

  let m = word1.length, n = word2.length;
  if (i === m && j === n) {
    memo[key] = 0;
    return memo[key];
  }
  if (j === n) {
    memo[key] = m - i;
    return memo[key];
  }
  if (i === m) {
    memo[key] = n - j;
    return memo[key];
  }
  if (word1[i] === word2[j]) {
    memo[key] = minDistance(word1, word2, i + 1, j + 1, memo);
    return memo[key];
  }

  const delete_cost = minDistance(word1, word2, i + 1, j, memo) + 1;
  const insert_cost = minDistance(word1, word2, i, j + 1, memo) + 1;
  const update_cost = minDistance(word1, word2, i + 1, j + 1, memo) + 1;
  memo[key] = Math.min(delete_cost, insert_cost, update_cost);
  return memo[key];
}

console.log(minDistance('horse', 'ros')); // 3
console.log(minDistance('intention', 'execution')); // 5

/**
 * 2020/02/02 Tabulation
 * 1. Each cell in table stores min possible ways change from word1[0:i] to word2[0:j], and not include i and j.
 * 2. minDistance('', '') -> 0: table[0][0] = 0
 * 3. if word1[i] === word2[j], table[i+1][j+1] = table[i][j], no edit
 * 4. a. delete: table[i+1][j] = min(table[i+1][j], table[i][j] + 1)
 *    b. insert: table[i][j+1] = min(table[i][j+1], table[i][j] + 1)
 *    c. replace: table[i+1][j+1] = min(table[i+1][j+1], table[i][j] + 1)
 * 5. return table[m][n], m = word1.length, n = word2.length
 * @param {string} word1 
 * @param {string} word2 
 * @return {number}
 */
function minDistance(word1, word2) {
  const table = new Array(word1.length+1)
  .fill()
  .map(() => new Array(word2.length+1).fill(0));
  const m = word1.length;
  const n = word2.length;
  for (let i = 0; i < m+1; i++) table[i][0] = i; // initialize word1 by only insert
  for (let j = 0; j < n+1; j++) table[0][j] = j; // initialize word2 by only insert
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (word1[i] === word2[j]) {
        table[i+1][j+1] = table[i][j];
        continue;
      }
      const delete_cost = table[i+1][j];
      const insert_cost = table[i][j+1];
      const update_cost = table[i][j];
      table[i+1][j+1] = Math.min(delete_cost, insert_cost, update_cost) + 1;
    }
  }
  return table[m][n];
}

console.log(minDistance('horse', 'ros')); // 3
console.log(minDistance('intention', 'execution')); // 5

/**
 * DP Solution 12/12
 * Rolling Array Improvement: m stages -> 2 stages
 * Update different initial states in each stage while iteration
 * Preset prevStage rather than currStage
 * 
 * T: O(m*n)
 * S: O(n)
 * Runtime: 104 ms
 */
var minDistance = function (word1, word2) {
  let m = word1.length;
  let n = word2.length;

  let prevStage = new Array(n + 1).fill(0); // n states

  for (let j = 0; j < n + 1; j += 1) prevStage[j] = j;

  for (let i = 1; i < m + 1; i += 1) {
    let currStage = new Array(n + 1).fill(i); // Init initial stages for row i
    for (let j = 1; j < n + 1; j += 1) {
      let delta = (word1[i - 1] === word2[j - 1]) ? 0 : 1;
      currStage[j] = Math.min(
        prevStage[j - 1] + delta, // Replace
        prevStage[j] + 1, // Delete
        currStage[j - 1] + 1 // Insert
      );
    }
    prevStage = [...currStage]; // Copy currStage as prevStage for next iteration
  }

  return prevStage[n];
};

/**
 * 2019/11/23 Revisit
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  if (word1.length === 0) return word2.length;
  if (word2.length === 0) return word1.length;

  let stages = [];
  let states = new Array(word2.length + 1).fill(0);
  for (let i = 0; i < word1.length + 1; i += 1) {
    stages.push([...states]);
  }
  for (let i = 0; i < word1.length + 1; i += 1) {
    stages[i][0] = i;
  }
  for (let j = 0; j < word2.length + 1; j += 1) {
    stages[0][j] = j;
  }

  for (let i = 1; i < stages.length; i += 1) {
    for (let j = 1; j < stages[i].length; j += 1) {
      if (word1[i - 1] !== word2[j - 1]) {
        stages[i][j] = stages[i][j] = Math.min(stages[i - 1][j - 1], stages[i - 1][j], stages[i][j - 1]) + 1;
      } else {
        stages[i][j] = stages[i - 1][j - 1];
      }
    }
  }

  return stages[word1.length][word2.length];
};