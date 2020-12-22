const PriorityQueue = require('./PriorityQueue');
/**
 * Bellman-Ford solution: O(ne) = O(n^3) in case e = v^2
 * n: N
 * e: times.length
 * 
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  if (times.length === 0 || N === 0) return 0;
  const distances = Array(N).fill(Infinity);
  distances[K-1] = 0;
  for (let i = 0; i < N; i++) {
    for (const [u, v, w] of times) {
      const node = u - 1;
      const next_node = v - 1;
      distances[next_node] = Math.min(distances[next_node], distances[node] + w)
    }
  }
  const result = Math.max(...distances);
  return result === Infinity ? -1 : result;
};

const NODE_STATES = {
  UNVISITED: 0,
  VISITED: 1
}
/**
 * Dijkstra: O(n + elogn) = O(n^2logn) in case e = v^2
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  const graph = Array(N+1)
  .fill()
  .map(() => []);
  for (const [u, v, w] of times) {
    graph[u].push([v, w]);
  }
  const distances = Array(N+1).fill(Infinity);
  distances[K] = 0;
  const states = Array(N+1).fill(NODE_STATES.UNVISITED);
  const p_queue = new PriorityQueue((a, b) => a[1] - b[1]);
  p_queue.add([K, 0]);

  while (p_queue.size() !== 0) {
    const [node, weight] = p_queue.poll();
    if (states[node] === NODE_STATES.VISITED) continue;
    states[node] = NODE_STATES.VISITED;

    for (const [next_node, next_weight] of graph[node]) {
      if (distances[next_node] > distances[node] + next_weight) {
        distances[next_node] = distances[node] + next_weight;
        p_queue.add([next_node, distances[next_node]]);
      }
    }
  }
  const result = Math.max(...distances.slice(1));
  return result === Infinity ? -1 : result;
}

console.log(networkDelayTime2([[2,1,1],[2,3,1],[3,4,1]], 4, 2)); // 2

