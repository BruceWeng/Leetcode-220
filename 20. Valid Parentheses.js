/**
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
/**
 * Leetcode Explore: 1/24/2019 Update
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) return true;

    let stack = [];
    for (let c of s) {
        if (c === "{") {
            stack.push("}");
            continue
        }
        if (c === "[") {
            stack.push("]");
            continue
        }
        if (c === "(") {
            stack.push(")");
            continue
        }
        if (stack.length !== 0 && stack[stack.length - 1] === c) {
            stack.pop(); // match found
            continue
        }
        return false; // no match open parentheses to current close parentheses
    }

    return stack.length === 0; // if there is any open parentheses left, return false
};