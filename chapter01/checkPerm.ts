function checkPerm(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }

  return permutation(s1, s2);
}

function permutation(s1: string, s2: string): boolean {
  return s1.split('').sort().join('') === s2.split('').sort().join('');
}

console.log(checkPerm("aab", "aba")); //true
console.log(checkPerm("abc", "cba")); // true
console.log(checkPerm("abc", "qwe")); // false
