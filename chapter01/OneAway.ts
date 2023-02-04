function OneAway(s1: string, s2: string): boolean {
  if (Math.abs(s1.length - s2.length) > 2) return false;

  let edits = 0;
  let [i, j] = [0, 0];
  let [n, m] = [s1.length, s2.length];

  while (i < n && j < m && edits <= 1) {
    if (s1[i] !== s2[j]) {
      edits += 1;
      if (n > m) {
        i += 1
      } else if (m > n) {
        j += 1;
      } else {
        [i, j] = moveBothPointers(i, j);
      }
    } else {
      [i, j] = moveBothPointers(i, j);
    }
  }

  return edits <= 1;
}

function moveBothPointers(i: number, j: number): number[] {
  return [i + 1, j + 1];
}

console.log(OneAway('pale', 'ple'));
console.log(OneAway('pales', 'pale'));
console.log(OneAway('pale', 'bale'));
console.log(OneAway('pale', 'bake'));
