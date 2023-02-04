function URLify(s) {
  let word = "";
  let sentence = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      word += s[i];

      if (i + 1 === s.length) {
        sentence.push(word);
      }

    } else {
      if (word.length > 0) {
        sentence.push(word);
      }

      word = "";
    }
  }

  return sentence.join("%20");
}

console.log(URLify("Mr  John  Smith    ")); // "Mr%20John%20Smith"
console.log(URLify("   Mr John      Smith")); // "Mr%20John%20Smith"
