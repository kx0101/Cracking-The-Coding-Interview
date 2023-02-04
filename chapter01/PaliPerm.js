function PaliPerm(s) {
  const charMap = new Map();
  
  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char !== ' ') {
      charMap.set((charMap.get(s[i] || 0) + 1));
    }
  }

  let hasFoundOddFreq = false;

  for (let [char, freq] of charMap) {
    if (freq % 2 !== 0) {
      if (hasFoundOddFreq) {
        return false;
      } else {
        hasFoundOddFreq = true;
      }
    }
  }

  return true;
}

console.log(PaliPerm('adsfdfwerxcv'));
