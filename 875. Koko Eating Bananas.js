/**
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
 * The guards have gone and will come back in h hours.
 * 
 * Koko can decide her bananas-per-hour eating speed of k. 
 * Each hour, she chooses some pile of bananas and eats k bananas from that pile. 
 * If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
 * 
 * Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
 * Return the minimum integer k such that she can eat all the bananas within h hours.
 * 
 * h: number of split
 * k: min sum to split the array in h
 */
const piles1 = [3,6,7,11], h1 = 8
const piles2 = [30,11,23,4,20], h2 = 5
const piles3 = [30,11,23,4,20], h3 = 6
console.log(minEatingSpeed(piles1, h1)) // 4
console.log(minEatingSpeed(piles2, h2)) //  30
console.log(minEatingSpeed(piles3, h3)) // 23

function minEatingSpeed(piles, H) {
  if(piles==null || !Array.isArray(piles) || piles.length===0
    || H==null || H<0) return null
  let start = 1, end = Math.max(...piles)
  while(start<end) {
    let mid = start+((end-start)>>1)
    if(feasible(mid, piles, H)) end = mid
    else start = mid+1
  }
  return start
}

function feasible(speed, piles, H) {
  let hour = 0
  for(let pile of piles) {
    hour+=Math.ceil(pile/speed)
  }
  return hour<=H
}