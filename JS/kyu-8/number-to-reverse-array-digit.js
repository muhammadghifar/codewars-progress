// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/javascript
function digitize(n) {
  //code here
  return n.toString().split("").reverse().map(val => parseInt(val))
}

console.log(digitize(35231))