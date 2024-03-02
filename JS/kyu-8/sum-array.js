// Sum Numbers
function sum (numbers) {
  "use strict";
  
  return numbers.reduce((a, b) => a + b, 0)
};

const num = []
console.log(sum(num));