/**
 * Given a m x n matrix, if an element is 0, set its entire row and column to 0.
 * Do it in place.
 */

/**
Algorithm:
1. Store states of each row in the first row.
2. Store states of each col in the first col.
EX: if matrix[i][j] = 0: row: matrix[0][j] = 0, col: matrix[i][0] = 0
3. State of row0 and col0 occupy the same cell, use matrix[0][0] to represent state of
row0, and use another variable col0 to represent state of col0
4. Use states to set matrix elements. Use bottom-up direction to prevent mess up
states in matrix[i][0] and matrix[0][j]
T: O(m*n), S: O(1)
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  if(matrix === undefined || matrix.length === 0 || matrix[0].length === 0) return;
  
  let col0 = false,
      rows = matrix.length,
      cols = matrix[0].length;
  
  for(let i=0; i<rows; i++) {
    if(matrix[i][0] === 0) col0 = true;
    for(let j=1; j<cols; j++) {
      if(matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  
  for(let i=rows-1; i>-1; i--) {
    for(let j=cols-1; j>0; j--) {
      if(matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }
    if(col0 === true) matrix[i][0] = 0;
  }
};