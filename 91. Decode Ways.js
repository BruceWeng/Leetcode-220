/**
 * A message containing letters from A-Z can be encoded into numbers using the following mapping:
 * 
 * 'A' -> "1"
 * 'B' -> "2"
 * ...
 * 'Z' -> "26"
 * 
 * Given a string s containing only digits, return the number of ways to decode it.
 * 
 * The answer is guaranteed to fit in a 32-bit integer.
 */
const s1 = "12"
console.log(numDecodings(s1)) // 2 "AB" (1, 2) and "L" (12)
const s2 = "226"
console.log(numDecodings(s2)) // 3 (2, 2, 6), (22, 6) and (2, 26)
const s3 ="0"
console.log(numDecodings(s3)) // 0

/**
 * @param {string} s
 * @return {number}
 */
 function numDecodings(s) {
  if(s==null || typeof s!=='string') return null
  if(s[0]==="0") return 0

  const dp = Array(s.length+1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for(let i=2; i<dp.length; i++) {
    let previous1 = Number(s[i-1])
    let previous2 = Number(s.slice(i-2, i))
    if(previous1>0) dp[i] += dp[i-1]
    if(previous2>=10 && previous2<=26) dp[i] += dp[i-2]
  }
  return dp[dp.length-1]
}