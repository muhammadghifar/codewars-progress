// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/javascript
function filter_list(l) {
  // Return a new array with the strings filtered out
  const result = []
  l.map(val => typeof val === 'number' && result.push(val))
  
  return result
}

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
