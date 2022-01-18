# Leetcode Core 220
## Iterative problems:
1. Shuffle
2. HashMap
3. Pointers
4. LRU/LFU cache and Trie
5. Queue/Stack with tuple
6. Monotonic stack/queue
7. Level order/BFS/Topological sort
8. Kadane
9. Interval
10. Sliding window

## Recursive problems:
1. Divide and conquor
2. Priority queue
3. Quick select/Merge sort
4. Union find
5. DFS/Check cycle
6. Recursion and memoization
7. All path(backtracking)

Short Core:
1. Binary Search
2. Quick Select
3. DP, Search, Backtracking
4. Graph(Add/Remove Vertex/Edge, DFS, BFS, hasCycle, shortestPath, topologicalSort)
5. LRU, LFU cache
6. Interval

## Solutions of top 100 liked and top frequently asked interview questions.
| Group          |  #  | Category                | # | Questions                               | R       | I       | Blind   |
|:--------------:|:---:|:-----------------------:|:-:|---------------------------------------- |:-------:|:-------:|:-------:|
| A.Tabulation   | 1.1 | Conbination DP          | 1 | 55. Jump Game                           | &check; | &check; | &check; |
| Recursion/Memo |     |                         | 2 | 62. Unique Paths                        | &check; | &check; | &check; |
|                |     |                         | 3 | 64. Minimum Path Sum                    | &check; | &check; |				 |
|                |     |                         | 4 | 70. Climbing Stairs                     | &check; | &check; | &check; |
|                |     |                         | 5 | 91. Decode Ways                         | &check; | &check; | &check; |
|                |     |                         | 6 | 118. Pascal's Triangle                  | &check; | &check; |				 |
|                |     |                         | 7 | 139. Word Break                         | &check; | &check; | &check; |
|                |     |                         | 8 | 300. Longest Increasing Subsequence     | &check; | &check; | &check; |
|                |     |                         | 9 | 322. Coin Change                        | &check; | &check; | &check; |
|                |     |                         | 10 | 416. Partition Equal Subset Sum        | &check; | &check; |				 |
|                |     |                         | 11 | 494. Target Sum                        | &check; | &check; |				 |
|								 |		 |												 | 12 | 1143. Longest Common Subsequence			 | &check; | &check; | &check; |
|                | 1.2 | Local/Global DP         | 1 | 128. Longest Consecutive Sequence       | &check; | &check; | &check; |
|                |     |                         | 2 | 134. Gas Station                        | &check; | &check; |				 |
|                |     |                         | 3 | 221. Maximal Square                     | &check; | &check; |				 |
|                |     |                         | 4 | 279. Perfect Squares                    | &check; | &check; |				 |
|                | 1.3 | Kadane DP               | 1 | 53. Maximum Subarray                    |         | &check; | &check; |
|                |     |                         | 2 | 152. Maximum Product Subarray           |         | &check; | &check; |
|                | 1.4 | Decision Making DP      | 1 | 198. House Robber                       | &check; | &check; | &check; |
|                |     |                         | 2 | 213. House Robber II                    | &check; | &check; | &check; |
|                |     |                         | 3 | 121. Best Time to Buy and Sell Stock    | &check; | &check; | &check; |
|                |     |               | 4 | 309. Best Time to Buy and Sell Stock with Cooldown| &check; | &check; |				 |
|                | 1.5 | Two String Matching DP  | 1 | 5. Longest Palindromic Substring        | &check; | &check; | &check; |
|                |     |                         | 2 | 10 Regular Expression Matching          | &check; | &check; |				 |
|                |     |                         | 3 | 44. Wildcard Matching                   | &check; | &check; |				 |
|                |     |                         | 4 | 72. Edit Distance                       | &check; | &check; |				 |
|                |     |                         | 5 | 647. Palindromic Substrings             | &check; | &check; | &check; |
|                | 1.6 | Two Direction DP        | 1 | 11. Container With Most Water           | &check; | &check; | &check; |
|                |     |                         | 2 | 238. Product of Array Except Self       | &check; | &check; | &check; |
|                | 1.7 | Merging Intervals DP    | 1 | 96. Unique Binary Search Trees          | &check; | &check; |				 |
|                |     |                         | 2 | 312. Burst Balloons                     | &check; | &check; |				 |
|                | 2.1 | Overlapping Interval    | 1 | 56. Merge Interval                      |         | &check; | &check; |
|                |     |                         | 2 | 57. Insert Interval                     |         | &check; | &check; |
|                |     |                         | 3 | 252. Meeting Rooms                      |         | &check; | &check; |
|                |     |                         | 4 | 253. Meeting Rooms II                   |         | &check; | &check; |
|                | 2.2 | Max non-overlapping Interval | 5 | 435. Non-overlapping Intervals     |         | &check; | &check; |
|                |     |                 | 6 | 452. Minimum Number of Arrows to Burst Balloons |         | &check; |				 |
|                | 2.3 | Intersection 2 pointers | 7 | 986. Interval List Intersections        |         | &check; |				 |
|                |     |                         | 8 | 1229. Meeting Scheduler                 |         | &check; |				 |
|                |  3  | Binary Search | 1 | 278. First Bad Version                            |         | &check; |				 |
|                |     |               | 2 | 69. Sqrt(x)                                       | &check; | &check; |				 |
|                |     |               | 3 | 35. Search Insert Position                        |         | &check; |				 |
|                |     |               | 4 | 981. Time Based Key-Value Store                   |         | &check; |				 |
|                |     |               | 5 | 1011. Capacity To Ship Packages Within D Days     |         | &check; |				 |
|                |     |               | 6 | 410. Split Array Largest Sum                      |         | &check; |				 |
|                |     |               | 7 | 875. Koko Eating Bananas                          |         | &check; |				 |
|                |     |               | 8 | 1482. Minimum Number of Days to Make m Bouquets   |         | &check; |				 |
|                |     |               | 9 | 668. Kth Smallest Number in Multiplication Table  |         | &check; |				 |
|                |     |               | 10 | 719. Find K-th Smallest Pair Distance            |         | &check; |				 |
|                |     |               | 11 | 1201. Ugly Number III                            |         | &check; |				 |
|                |     |               | 12 | 1283. Find the Smallest Divisor Given a Threshold|         | &check; |				 |
|                |     |               | 13 | 4. Median of Two Sorted Arrays                   | &check; |         |				 |
|                |     |               | 14 | 33. Search in Rotated Sorted Array               |         | &check; | &check; |
|                |     |               | 15 | 34. Search for a Range (First and Last Position) |         | &check; |				 |
|                |     |               | 16 | 153. Minimum in Rotated Sorted Array             | &check; | &check; | &check; |
|                |     |               | 17 | 162. Find Peak Element                           | &check; | &check; |				 |
|                |     |               | 18 | 287. Find the Duplicate Number                   | &check; | &check; |				 |
|                |     |               | 19 | 300. Longest Increasing Subsequence              |         | &check; |				 |
|                |     |               | 20 | 378. Kth Smallest Element in a Sorted Matrix     |         | &check; |				 |
|                | 4.1 | Sliding Window          | 1 | 3. Longest Substring Without Repeating Characters |  | &check; | &check; |
|                |     |                         | 2 | 76. Minimum Window Substring            |         | &check; | &check; |
|                |     |             | 3 | 340. Longest Substring with At Most K Distinct Characters |   | &check; |				 |
|                |     |           | 4 | 395. Longest Substring with At Least K Repeating Characters |   | &check; |				 |
|                |     |                         | 5 | 424. Longest Repeating Character Replacement |    | &check; | &check; |
|                |     |                         | 6 | 438. Find All anagrams in a String      |         | &check; |			   |
|                |     |                         | 7 | 763. Partition Labels                   |         | &check; |				 |
|                | 4.2 | HashMap                 | 1 | 1. Two Sum                              |         | &check; | &check; |
|                |     |                         | 2 | 13. Roman to Integer                    |         | &check; |				 |
|                |     |                         | 3 | 49. Group Anagrams                      |         | &check; | &check; |
|                |     |                         | 4 | 138. Copy List with Random Pointer      |         | &check; |				 |
|                |     |                         | 5 | 169. Majority Element                   |         | &check; |				 |
|                |     |                         | 6 | 217. Contains Duplicate                 |         | &check; | &check; |
|                |     |                         | 7 | 242. Valid Anagram                      |         | &check; | &check; |
|                |     |                         | 8 | 350. Intersection of Two Arrays II      |         | &check; |				 |
|                |     |                         | 9 | 380. Insert Delete GetRandom O(1)       |         | &check; |				 |
|                |     |                         | 10 | 387. First Unique Character in a String|         | &check; |				 |
|                |     |                         | 11 | 454. 4Sum II                           |         | &check; |				 |
|                |     |                         | 12 | 560. subarray Sum Equals K             |         | &check; |				 |
|                | 4.3 | Prefix Sum              | 1 | 308. Range Sum Query 2D - Mutable       |         | &check; |				 |
|                |     |                         | 2 | 560. Subarray Sum Equals K              |         | &check; |				 |
|                | 5.1 | Pointers      | 1 | 15. 3Sum                                          |         | &check; | &check; |
|                |     |               | 2 | 26. Remove Duplicates from Sorted Array           |         | &check; |				 |
|                |     |               | 3 | 48. Rotate Image                                  |         | &check; | &check; |
|                |     |               | 4 | 54. Spiral Matrix                                 |         | &check; | &check; |
|                |     |               | 5 | 66. Plus One                                      |         | &check; |				 |
|                |     |               | 6 | 73. Set Matrix Zeros                              |         | &check; | &check; |
|                |     |               | 7 | 88. Merge Sorted Array                            |         | &check; |				 |
|                |     |               | 8 | 116. Populating Next Right Pointers in Each Node  | &check; | &check; |				 |
|                |     |               | 9 | 125. Valid Palindrome                             |         | &check; | &check; |
|                |     |               | 10 | 163. Missing Ranges                              |         | &check; |				 |
|                |     |               | 11 | 240. Search a 2D Matrix II                       | &check; | &check; |				 |
|                |     |               | 12 | 251. Flatten 2D Vector                           |         | &check; |				 |
|                |     |               | 13 | 277. Find the Celebrity                          |         | &check; |				 |
|                |     |               | 14 | 283. Move Zeros                                  |         | &check; |				 |
|                |     |               | 15 | 412. Fizz Buzz                                   |         | &check; |				 |
|                |     |               | 16 | 581. Shortest Unsorted Continuous Subarray       | &check; | &check; |				 |
|                |     |               | 17 | 763. Partition Labels                            | &check; | &check; |				 |
|                | 5.2 | Negative Mark | 1 | 448. Find All Numbers Disappeared in an Array     |         | &check; |				 |
|                | 5.3 | XOR           | 1 | 136. Single Number                                |         | &check; |			   |
|                |     |               | 2 | 268. Missing Number                               |         | &check; | &check; |
|                | 5.4 | Bit Manipulation | 1 | 190. Reverse Bits                              |         | &check; | &check; |
|                |     |               | 2 | 191. Number of 1 Bits                             |         | &check; | &check; |
|                |     |               | 3 | 289. Game of Life                                 | &check; |         |				 |
|                |     |               | 4 | 338. Counting Bits                                |         | &check; | &check; |
|                |     |               | 5 | 371. Sum of Two Integers                          | &check; |         | &check; |
| B.Recursion    |  0  | Recursion     | 1 | 172. Factorial Trailing Zeros                     | &check; |         |				 |
|                |  1  | Backtracking  | 1 | 17. Letter Combinations of a Phone Number         | &check; |         |				 |
|                |     |               | 2 | 39. Combination Sum                               | &check; |         | &check; |
|                |     |               | 3 | 46. Permutations                                  | &check; |         |				 |
|                |     |               | 4 | 78. Subsets                                       | &check; |         |				 |
|                |     |               | 5 | 131. Palindrome Partitioning                      | &check; |         |				 |
| Recursion/DFS  | 2.1 | DFS           | 1 | 22. Generate Parentheses                          | &check; |         |				 |
|                |     |               | 2 | 94. Binary Tree Inorder Traversal                 | &check; |         |				 |
|                |     |               | 3 | 104. Maximum Depth of Binary Tree                 | &check; |         | &check; |
|                | 2.2 | Postorder DFS | 1 | 101. Symmetric Tree                               | &check; |         |				 |
|                |     |               | 2 | 124. Binary Tree Maximum Path Sum                 | &check; |         | &check; |
|                |     |               | 3 | 236. Lowest Common Ancestor of a Binary Tree      | &check; |         | &check; |
|                |     |               | 4 | 543. Diameter of Binary Tree                      | &check; |         |				 |
|                | 2.3 | Divide and Conquer DFS | 1 | 23 Merge k Sorted Lists                  | &check; |         | &check; |
|                |     |                        | 2 | 98. Validate Binary Search Tree          | &check; |         | &check; |
|                |     |  | 3 | 105. Construct Binary Tree from Preorder and Inorder Traversal | &check; |         | &check; |
|                |     |                 | 4 | 108. Convert Sorted Array to Binary Search Tree | &check; |         |				 |
|                |     |                        | 5 | 148. Sort List                           | &check; |         |				 |
|                |     |                        | 6 | 212. Word Search II                      | &check; |         |				 |
|                |     |                        | 7 | 218. The Skyline Problem                 | &check; |         |				 |
|                |     |                        | 8 | 230. Kth Smallest Element in BST         | &check; |         | &check; |
|                |     |                        | 9 | 285. Inorder Successor in BST            | &check; |         |				 |
|                |     |                        | 10 | 617. Merge Two Binary Trees             | &check; |         |				 |
|                | 2.4 | Divide and Conquer DFS with Memo | 1 | 337. House Robber III          | &check; |         |				 |
|                |     |                        | 2 | 437. Path Sum III                        | &check; |         |				 |
|                |     |                        | 3 | 572. Subtree of Another Tree             | &check; |         | &check; |
|Recursion/Search| 3.1 | DFS and Checked        | 1 | 79. Word Search                          | &check; |         | &check; |
|                |     |                        | 2 | 127. Word Ladder                         | &check; |         |				 |
|                |     |                        | 3 | 130. Surrounded Regions                  | &check; |         |				 |
|                |     |                        | 4 | 133. Clone Graph                         | &check; |         | &check; |
|                |     |                        | 5 | 140. Word Break II                       | &check; |         |				 |
|                |     |                        | 6 | 200. Number of Islands                   | &check; |         | &check; |
|                |     |                        | 7 | 329. Longest Increasing Path in a Matrix | &check; |         |				 |
|                |     |                        | 8 | 417. Pacific Atlantic Water Flow         | &check; |         | &check; |
|                |3.1.2| Union Find             | 1 | 130. Surrounded Regions                  | &check; |         |				 |
|                |     |                        | 2 | 200. Number of Islands                   | &check; |         |				 |
|                |     |                        | 3 | 261. Graph Valid Tree                    | &check; |         | &check; |
|                | 3.2 | BFS and Checked        | 1 | 127. Word Ladder                         |         | &check; |				 |
|                |     |                        | 2 | 130. Surrounded Regions                  |         | &check; |				 |
|                | 3.3 | Trie Tree              | 1 | 208. Implement Trie                      |         | &check; | &check; |
|                |     |                | 2 | 211. Add and Search Word - Data structure design | &check; | &check; | &check; |
|                |     |                        | 3 | 212. Word Search II                      | &check; |         | &check; |
|                | 3.4 | Matrix and Checked     | 1 | 36. Valid sudoku                         | &check; | &check; |				 |
|                |     |                        | 2 | 289. Game of Life                        | &check; |         |				 |
|                |     |                        | 3 | 348. Design Tic-Tac-Toe                  |         | &check; |				 |
| Recursion/Graph| 4.1 | Graph, DFS and Check cycle | 1 | 207. Course Schedule                 | &check; |         | &check; |
|                |     |                            | 2 | 210. Course Schedule II              | &check; |         |				 |
|                |     |      | 3 | 323. Number of Connected Components in an Undirected Graph | &check; |         | &check; |
|                | 4.2 | Graph, BFS and Topological Sort | 1 | 207. Course Schedule            |         | &check; | &check; |
|                |     |                                 | 2 | 210. Course Schedule II         |         | &check; |				 |
|                |     |                                 | 3 | 269. Alien Dictionary           |         | &check; | &check; |
|                | 4.3 | Bellman-Ford, Dijkstra | 1 | 743. Network Delay Time                  |         | &check; |				 |
| C.Quick Select |  1  | Quick Select Partition | 1 | 75. Sort Colors                          |         | &check; |				 |
|                |     |                        | 2 | 215. Kth Largest Element in an Array     | &check; |         |				 |
|                |     |                        | 3 | 324. Wiggle Sort II                      | &check; |         |				 |
|                | 2.1 | Quick Sort                                                            | &check; |         |				 |
|                | 2.2 | Merge Sort             | 1 | 315. Count of Smaller Numbers After Self | &check; |         |				 |
|                | 2.3 | Shuffle                | 1 | 215. Kth Largest Element in an Array     | &check; |         |				 |
|                |     |                        | 2 | 324. Wiggle Sort II                      | &check; |         |				 |
|                |     |                        | 3 | 384. Shuffle an Array                    |         | &check; |				 |
|                |2.4.1| Swap                   | 1 | 41. First Missing Positive               |         | &check; |				 |
|                |     |                        | 2 | 344. Reverse String                      |         | &check; |				 |
|                |     |                        | 3 | 380. Insert Delete GetRandom O(1)        |         | &check; |				 |
|                |     |                        | 4 | 448. Find All Numbers Disappeared in an Array |    | &check; |				 |
|                |2.4.2| 3 Way Reverse          | 1 | 189. Rotate Array                        |         | &check; |				 |
| D.Linked List  |  1  | Linked List            | 1 | 2. Add Two Numbers                       | &check; | &check; |				 |
|                |     |                        | 2 | 19. Remove Nth Node From End of List     | &check; | &check; | &check; |
|                |     |                        | 3 | 21. Merge Two Sorted Lists               | &check; | &check; | &check; |
|                |     |                        | 4 | 141. Linked List Cycle                   | &check; | &check; | &check; |
|                |     |                        | 5 | 142. Linked List Cycle II                |         | &check; |				 |
|                |     |                        | 6 | 143. Reorder List                        | &check; | &check; | &check; |
|                |     |                        | 7 | 148. Sort List                           | &check; | &check; |				 |
|                |     |                        | 8 | 160. Intersection of Two Linked Lists    | &check; | &check; |				 |
|                |     |                        | 9 | 206. Reverse Linked List                 | &check; | &check; | &check; |
|                |     |                        | 10 | 234. Palindrome Linked List             | &check; | &check; |				 |
|                |     |                        | 11 | 237. Delete Node in a Linked List       | &check; | &check; |				 |
|                |     |                        | 12 | 285. Inorder Successor in BST           | &check; | &check; |				 |
|                |     |                        | 13 | 287. Find the Duplicate Number          | &check; | &check; |				 |
|                |     |                        | 14 | 328. Odd Even Linked List               | &check; | &check; |				 |
|                |  2  | Double Linked List     | 1 | 146. LRU Cache                           |         | &check; |				 |
|                |     |                        | 2 | 460. LFU Cache                           |         | &check; |				 |
| E.BFS          |  1  | BFS                    | 1 | 45. Jump Game II                         | &check; | &check; |				 |
|                |     |                        | 2 | 226. Invert Binary Tree                  | &check; | &check; | &check; |
|                |     |                        | 3 | 297. Serialize and Deserialize Binary Tree | &check; | &check; | &check; |
|                | 2.1 | Queue                  | 1 | 101. Symmetric Tree                      |         | &check; |				 |
|                |     |                        | 2 | 102. Binary Tree Level Order Traversal   |         | &check; | &check; |
|                |     |                        | 3 | 103. Binary Tree Zigzag Level Order Traversal |    | &check; |				 |
|                |     |                        | 4 | 116. Populating Next Right Pointers in Each Node | | &check; |			 	 |
|                | 2.2 | Monotonic Queue        | 1 | 239. Sliding Window Maximum              |         | &check; |				 |
|                | 3.1 | Stack                  | 1 | 20. Valid Parentheses                    | &check; | &check; | &check; |
|                |     |                        | 2 | 32. Longest Valid Parentheses            | &check; | &check; |				 |
|                |     |                        | 3 | 94. Binary Tree Inorder Traversal        | &check; | &check; |				 |
|                |     |                        | 4 | 100. Same Tree                           | &check; | &check; | &check; |
|                |     |                        | 5 | 104. Maximum Depth of Binary Tree        | &check; | &check; |				 |
|                |     |                        | 6 | 114. Flatten Binary Tree to Linked List  | &check; | &check; |				 |
|                |     |                        | 7 | 150. Evaluate Reverse Polish Notation    | &check; | &check; |				 |
|                |     |                        | 8 | 225. Implement Stack using Queues        |         | &check; |				 |
|                |     |                        | 9 | 232. Implement Queue using Stacks        | &check; |         | 				 |
|                |     |                        | 10 | 155. Min Stack                          |         | &check; |				 |
|                |     |                        | 11 | 227. Basic Valculator II                | &check; | &check; |				 |
|                |     |                        | 12 | 230. Kth Smallest Element in BST        | &check; | &check; | 				 |
|                |     |                  | 13 | 236. Lowest Common Ancestor of a Binary Tree  | &check; | &check; |				 |
|                |     |                        | 14 | 341. Flatten Nested List Iterator       | &check; | &check; |				 |
|                |     |                        | 15 | 394. Decode String                      |         | &check; |				 |	
|                |     |                        | 16 | 739. Daily Temperatures                 | &check; | &check; |				 |
|                | 3.2 | Monotonic Stack        | 1 | 496. Next Greater Element I              |         | &check; |				 |
|                |     |                        | 2 | 503. Next Greater Element II             |         | &check; |				 |
|                |     |                        | 3 | 42. Trapping Rain Water                  | &check; | &check; |				 |
|                |     |                        | 4 | 84. Largest Rectangle Histogram          |         | &check; |				 |
|                |     |                        | 5 | 85. Maximal Rectangle                    |         | &check; |				 |
| F.Others       |  1  | Math Division          | 1 | 7. Reverse Integer                       |         | &check; |				 |
|                |     |                        | 2 | 8. String to Integer (atoi)              |         | &check; |				 |
|                |     |                        | 3 | 29. Divide Two Integers                  | &check; | &check; |				 |
|                |     |                        | 4 | 50. Pow(x, n)                            | &check; |         |				 |
|                |     |                        | 5 | 166. Fraction to Recurring Decimal       | &check; | &check; |				 |
|                |     |                        | 6 | 202. Happy Number                        | &check; |         |				 |
|                |     |                        | 7 | 204. Count Primes                        |         | &check; |				 |
|                |  2  | Substring              | 1 | 14. Longest Common Prefix                | &check; | &check; |				 |
|                |     |                        | 2 | 28. Implement strStr()                   | &check; | &check; |				 |
|                |     |                        | 3 | 38. Count and Say                        | &check; | &check; |			 	 |
|                |     |                        | 4 | 271. Encode and Decode Strings           | &check; | &check; | &check; |
|                |  3  | Greedy                 | 1 | 122. Best Time to Buy and Sell Stock II  |         | &check; |				 |
|                |     |                        | 2 | 326. Power of Three                      |         | &check; |				 |
|                |     |                        | 3 | 334. Increasing Triplet Subsequence      |         | &check; |				 |
|                |  4  | Point centered gcd     | 1 | 149. Max Points on a Line                |         | &check; |				 |
|                |  5  | Moore's Voting algorithm | 1 | 169. Majority Element                  |         | &check; |				 |
|                |  6  | ASCII                  | 1 | 171. Excel Sheet Column Number           |         | &check; |				 |
|                |     |                        | 2 | 621. Task Scheduler                      |         | &check; |				 |
|                |  7  | Sorting Variation      | 1 | 179. Largest Number                      |         | &check; |				 |
|                |     |                        | 2 | 324. Wiggle Sort II                      |         | &check; |				 |
|                |     |                        | 3 | 347. Top K Frequent Elements             |         | &check; | &check; |
|                |     |                        | 4 | 406. Queue Reconstruction by Height      |         | &check; |				 |
|                |  8  | Heap                   | 1 | 215. Kth Largest Element in an Array     |         | &check; |				 |
|                |     |                        | 2 | 295. find Median from Data Stream        |         | &check; | &check; |
|                |     |                        | 3 | 743. Network Delay Time                  |         | &check; |				 |
|                |  9  | Binary Search Tree     | 1 | 315. Count of Smaller Numbers After Self | &check; |         |				 |
|                |  10 | Binary Indexed Tree    | 1 | 315. Count of Smaller Numbers After Self |         | &check; |				 |
