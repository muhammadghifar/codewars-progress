// function flickSwitch(arr){
//   let result = [];
//   let switchState = true; // Set initial switch state to false
//   for (let i = 0; i < arr.length; i++) { // Use < instead of <= to avoid going out of bounds
//     if (arr[i] === 'flick') {
//       switchState = !switchState;
//     }
//     result.push(switchState); // Push the switch state after each iteration
//   }
//   return result;
// }

function flickSwitch(arr){
  let flick = true
  return arr.map(item => item === 'flick'? flick = !flick: flick)
}

const result = flickSwitch(['flick', 'flick', 'flick', 'flick']);
console.log(result);
