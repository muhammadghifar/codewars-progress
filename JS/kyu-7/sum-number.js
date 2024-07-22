// https://www.codewars.com/kata/55f2b110f61eb01779000053/javascript
function getSum(a, b) {
  let result
  for (a; a <= b; a++) {
    result = a
  }
  return a !== b ? result : a
}

console.log(getSum(1, 2));
console.log(getSum(1, -1));
