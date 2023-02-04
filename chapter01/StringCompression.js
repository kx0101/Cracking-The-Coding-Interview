function StringCompression(s) {
  let result = '';
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      result += s[i] += count;
      count = 1;
    }
  }

  if (result.length < s.length) {
    return result;
  } else {
    return s;
  }
}

console.log(StringCompression("aabcccccaaa"));
console.log(StringCompression("abcd"));
