// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript
function openOrSenior(data){
  return data.map(([i, j]) => i >= 55 && j > 7 ? 'Senior' : 'Open');
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));