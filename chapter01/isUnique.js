function isUnique(s) {
  if (s.length === 0) {
    return false;
  }

  let charSet = new Set();

  for (let i = 0; i < s.length; i++) {
    if (charSet.has(s[i])) {
      return false;
    }

    charSet.add(s[i]);
  }

  return true;
}

console.log(isUnique("abcd")); // true
console.log(isUnique("aabc")); // false
console.log(isUnique("abeq")); // true
