/**
 * Create a timebased key-value store class TimeMap, that supports two operations.
 * 
 * 1. set(string key, string value, int timestamp)
 * Stores the key and value, along with the given timestamp.
 * 
 * 2. get(string key, int timestamp)
 * Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.
 * If there are multiple such values, it returns the one with the largest timestamp_prev.
 * If there are no values, it returns the empty string ("").
 */
 class TimeMap {
  constructor() {
    this.store = {}; // <key, [{ timestamp, value }...]>
  }

  set(key, value, timestamp) {
    if(!(key in this.store)) this.store[key] = [{timestamp, value}]
    this.store[key].push({timestamp, value})
  }

  get(key, timestamp) {
    if(!(key in this.store)) return ""
    const space = this.store[key]
    let start = 0, end = space.length
    while(start<end) {
      let mid = start+((end-start)>>1)
      if(space[mid].timestamp>timestamp) end = mid
      if(space[mid].timestamp<=timestamp) start = mid+1
    }
    if(start===0) return ""
    return space[start-1].value
  }
}

let kv = new TimeMap();   
kv.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1   
console.log(kv.get("foo", 1));  // output "bar"   
console.log(kv.get("foo", 3)); // output "bar" since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 ie "bar"   
kv.set("foo", "bar2", 4);   
console.log(kv.get("foo", 4)); // output "bar2"   
console.log(kv.get("foo", 5)); //output "bar2"  
// console.log(kv.get("foo", -1)) // ""