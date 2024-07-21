// https://www.codewars.com/kata/57f609022f4d534f05000024/javascript
function stray(numbers = []) {
  return numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));
}

console.log(stray([2, 1, 1]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));
