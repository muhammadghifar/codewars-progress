// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb
function flickSwitch(arr){
  let flick = true
  return arr.map(item => item === 'flick'? flick = !flick: flick)
}

const result = flickSwitch(['flick', 'flick', 'flick', 'flick']);
console.log(result);
