/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = root => {
  if (root === undefined || root === null) return [];
  let result = [];
  inorderHelper(root, result);
  return result;
};

const inorderHelper = (root, result) => {
  if (root === null) return;

  inorderHelper(root.left, result); // traverse left subtree
  result.push(root.val); // visit the root
  inorderHelper(root.right, result); // traverse right subtree
};

const ACTION = {
  VISIT: 0,
  PUSH: 1
}
// Iterative solution
function Command(next_action, node) {
  return {
    next_action, // 0: visit, 1: push to result
    node
  };
}

const inorderIter = root => {
  if (root === undefined || root === null) return [];
  let result = [];
  let stack = [Command(ACTION.VISIT, root)];
  while (stack.length !== 0) {
    let curr = stack.pop();

    if (curr.next_action === ACTION.PUSH) {
      result.push(curr.node.val);
      continue;
    }

    // Put next action for nodes in reversed order
    // (1. Visit left node, 2. Push curr node, 3. Visit right node)
    if (curr.node.right !== null) stack.push(Command(ACTION.VISIT, curr.node.right));
    stack.push(Command(ACTION.PUSH, curr.node));
    if (curr.node.left !== null) stack.push(Command(ACTION.VISIT, curr.node.left));
  }

  return result;
};