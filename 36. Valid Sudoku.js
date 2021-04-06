/**
 * Note:
 *  1. Use a visited array(10) (0-9)
 *  2. Need to check each row, column and sub matrix
 *  3. After each each subset, renew visited array
 *  4. Time: O(3*10*10), Space: O(10)
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // col
    for(var i = 0; i < board.length; i++){
      var dupCheck = [];
      for(var j = 0; j < board[0].length; j++){
        if (!validCell(board, dupCheck, i, j)) return false
      }
    }
  
    for(i = 0; i < board.length; i++){
      dupCheck = [];
      for(j = 0; j < board[0].length; j++){
        if (!validCell(board, dupCheck, j, i)) return false
      }
    }
  
    for(i = 0; i < board.length; i+=3){
      for(j = 0; j < board.length; j+=3){
        dupCheck = [];
        for(var x = 0; x < 3; x++){
          for(var y = 0; y < 3; y++){
            if (!validCell(board, dupCheck, i + x, j + y)) return false
          }
        }
      }
    }
    return true;
  };
  
  function validCell(board, dupCheck, a, b) {
    if (board[a][b] !== '.' && dupCheck[board[a][b]]) return false
    dupCheck[board[a][b]] = true
    return true
  }