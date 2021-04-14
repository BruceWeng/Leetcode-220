/**
 * A conveyor belt has packages that must be shipped from one port to another within D days.
 * 
 * The ith package on the conveyor belt has a weight of weights[i]. 
 * Each day, we load the ship with packages on the conveyor belt (in the order given by weights). 
 * We may not load more weight than the maximum weight capacity of the ship.
 * 
 * Return the least weight capacity of the ship 
 * that will result in all the packages on the conveyor belt being shipped within D days.
 */
const weights = [1,2,3,4,5,6,7,8,9,10], D1 = 5
const weights2 = [3,2,2,4,1,4], D2 = 3
const weights3 = [1,2,3,1,1], D3 = 4
console.log(shipWithinDays(weights, D1)) // 15
console.log(shipWithinDays(weights2, D2)) // 6
console.log(shipWithinDays(weights3, D3)) // 3

function shipWithinDays(weights, D) {
  if(weights==null || weights.length===0 || D==null || D<0) return null
  // start=Max(weights), right=Sum(weights)
  let start = Math.max(...weights), end = weights.reduce((a, b) => a+b, 0)
  while(start<end) {
    let mid = start+((end-start)>>1)
    if(feasible(mid, weights, D)) end = mid
    else start = mid+1
  }
  return start
}

function feasible(capacity, weights, D) {
  let days = 1, total = 0
  for(let weight of weights) {
    total+=weight
    if(total>capacity) { // over capacity, find another range
      total = weight
      days++
    }
    if(days>D) return false // cannot ship within D days, reduce capacity
  }
  return true
}