// https://www.codewars.com/kata/5601409514fc93442500010b
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }

  let average = sum / classPoints.length;

  return yourPoints > average ? true : false;
}

console.log(betterThanAverage([2, 3], 19));