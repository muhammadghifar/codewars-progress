// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/javascript
String.prototype.isUpperCase = function() {
  // your code here
  return this.toString() === this.toUpperCase()
}

console.log('UPPERCASE'.isUpperCase())
console.log('lowercase'.isUpperCase())