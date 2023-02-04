function OneAway(s1, s2) {
  let s1Map = new Map();
  let s2Map = new Map();
  let edits = 0;

  for (let i = 0; i < s1.length; i++) {
    s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
  }

  for (let i = 0; i < s2.length; i++) {
    s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1);
  }

  for (let [char, freq] of s1Map) {
    if (edits > 1) return false;

    if (freq !== s2Map.get(char)) {
      edits += 1;
    }

    s2Map[char]--;
    s1Map[char]--;
  }

  return true;
}

console.log(OneAway('pale', 'ple'));
console.log(OneAway('pales', 'pale'));
console.log(OneAway('pale', 'bale'));
console.log(OneAway('pale', 'bake'));
