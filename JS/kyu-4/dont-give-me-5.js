// https://www.codewars.com/kata/621f89cc94d4e3001bb99ef4
// FIXME : Error performance for huge number
function dontGiveMeFive(start, end) {
  let result = [];
  for (start; start <= end; start++) {
    if (!start.toString().includes("5")) {
      result.push(start);
    }
  }

  return result.length;
}

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
console.log(dontGiveMeFive(-17, 9));

// ERROR
console.log(dontGiveMeFive(40076, 215151422963990));
