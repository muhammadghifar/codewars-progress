// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/javascript
function reverseWords(str) {
  // Go for it
  let word = str.split(" ")
  return word.map(a => a.split("").reverse().join("")).join(" ")
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
console.log(reverseWords("a b c d"));
console.log(reverseWords("apple"));
