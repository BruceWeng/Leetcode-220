/**
There is a new alien language which uses the latin alphabet. 
However, the order among letters are unknown to you. You receive a list of non-empty words 
from the dictionary, where words are sorted lexicographically by the rules of this new language. 
Derive the order of letters in this language.

Note:

You may assume all letters are in lowercase.
You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine.
 */
/**
 * Algorithm: Graph: Topological Sort
 * Note: 
 * Topological Ordering: In directed graph, the graph is constructed following a specific order between parents and children
 * ex: Lexical order:
 *   B -- D    G
 *  /      \  /
 * A        F
 *  \      / \
 *   C -- E   H -- I
 * 
 * Topological sort algo can find a topological ordering in O(V + E) time
 * Note: 
 * a. Topological orderings are not unique
 * b. The graph have to be DAG (Directed Acyclic Graphs) aka. no cycle
 * c. If there is a cycle in the graph, no topological ordering
 * d. THe root can be any node that inDegree == 0
 */
/**
 * BFS solution
 */
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  if (typeof words === "undefined" || words.length === 0) return "";

  let result = "";
  let nodeDependency = new Map(); // <char, Set(char)>
  let set = new Set(); // <set(char used in words)>
  let inDegree = new Array(26).fill(0); // <c.charCodeAt(0) - 97, count>

  // Add all chars used in words to set
  for (let word of words) {
    for (let char of word) {
      set.add(char);
    }
  }

  // Build dependency graph
  for (let i = 0; i < words.length - 1; i += 1) {
    let currWord = words[i];
    let nextWord = words[i+1];
    let len = Math.min(currWord.length, nextWord.length);

    for (let j = 0; j < len; j += 1) {
      let currChar = currWord[j];
      let nextChar = nextWord[j];
      if (currChar !== nextChar) {
        // Build neighbor set and update inDegree
        let neighborSet = nodeDependency.has(currChar) ? nodeDependency.get(currChar) : new Set();
        if (!neighborSet.has(nextChar)) { // avoid duplicates
          neighborSet.add(nextChar);
          nodeDependency.set(currChar, neighborSet);
          let index = nextChar.charCodeAt(0) - 97;
          inDegree[index] += 1;
        }
        break;
      }
    }
  }

  // Insert the nodes which have no parents
  let queue = [];
  for (let char of set) {
    let index = char.charCodeAt(0) - 97;
    if (inDegree[index] === 0) {
      queue.push(char);
    }
  }

  // BFS
  while (queue.length !== 0) {
    let char = queue.shift();
    result += char;
    if (!nodeDependency.has(char)) continue;
    for (let nextChar of nodeDependency.get(char)) {
      // decrease the degree and insert the new node which have no parents
      let index = nextChar.charCodeAt(0) - 97;
      inDegree[index] -= 1;
      if (inDegree[index] === 0) queue.push(nextChar);
    }
  }

  // Avoid the loop
  if (result.length !== set.size) return "";

  return result;
};

const NODE_STATUS = {
  UNVISITED: 0,
  IN_PROGRESS: 1,
  VISITED: 2
}
/**
 * 2020/12/18 update
 * @param {string[]} words
 * @return {string}
 */
function alienOrder(words) {
  if (words.length === 0) return '';
  // use map because it's iterable
  const graph = new Map(); // only char shown in words can be valid node
  const statuses = {};
  // initialize empty edge for each node
  for (const word of words) {
    for (const char of word) {
      graph.set(char, []);
      statuses[char] = NODE_STATUS.UNVISITED;
    }
  }
  // add edge to graph
  // compare two adjacent word, order is only determined when first pair char difference appears
  for (let i = 0; i < words.length - 1; i++) {
    const word = words[i];
    const next_word = words[i+1];
    if (word.length > next_word.length && word.slice(0, next_word.length) === next_word) {
      return ''; // invalid 'abc', 'ab' case, cannot compare 'c' with ''
    }
    let min_length = Math.min(word.length, next_word.length);
    for (let j = 0; j < min_length; j++) {
      if (word[j] !== next_word[j]) {
        graph.get(word[j]).push(next_word[j]);
        break;
      }
    }
  }
  
  let result = [];
  for (const node of graph.keys()) {
    if (hasCycle(node, graph, statuses, result)) return '';
  }
  return result.reverse().join('');
};

function hasCycle(node, graph, statuses, result) {
  if (statuses[node] === NODE_STATUS.VISITED) return false;
  if (statuses[node] === NODE_STATUS.IN_PROGRESS) return true;
  
  statuses[node] = NODE_STATUS.IN_PROGRESS;
  for (const next_node of graph.get(node)) {
    if (hasCycle(next_node, graph, statuses, result)) return true;
  }
  
  statuses[node] = NODE_STATUS.VISITED;
  result.push(node);
  return false;
}

let input0 = [
  "ac",
  "ab",
  "b"
]
console.log(alienOrder(input0)); // "acb"

let input1 = [
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt",
  "te"
];
console.log(alienOrder(input1)); // "wertf"

let input2 = [
  "z",
  "x"
];
console.log(alienOrder(input2)); // "zx"

let input3 = [
  "z",
  "x",
  "z"
];
console.log(alienOrder(input3)); // "" (Explanation: The order is invalid, so return "")

let input4 = [
  "z",
  "z"
];
console.log(alienOrder(input4)); // "z"