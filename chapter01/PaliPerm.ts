function PaliPerm(s: string): boolean {
  const charMap = new Map<string, number>();
  
  for (let i = 0; i < s.length; i++) {
    let char: string = s[i];

    if (char !== ' ') {
      charMap.set(char, (charMap.get(s[i]) || 0) + 1);
    }
  }

  let hasFoundOddFreq: boolean = false;

  for (let [_, freq] of charMap) {
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

console.log(PaliPerm('amdma'));
