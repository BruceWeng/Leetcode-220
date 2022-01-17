/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  if(s === undefined || s.length === 0) return 0;
  
  let result = 0,
      hashMap = {};
  hashMap['I'] = 1;
  hashMap['V'] = 5;
  hashMap['X'] = 10;
  hashMap['L'] = 50;
  hashMap['C'] = 100;
  hashMap['D'] = 500;
  hashMap['M'] = 1000;
  
  for (let i=0; i<s.length-1; i++) {
    if(hashMap[s[i]] >= hashMap[s[i+1]]) result += hashMap[s[i]];
    else result -= hashMap[s[i]];
  }
  result += hashMap[s[s.length-1]];
  return result;
};