// Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131/
function points(games) {
  let totalPoints = 0;
  for (let game of games) {
    let [x, y] = game.split(":");
    if (x > y) {
      totalPoints += 3;
    }
    if (x === y) {
      totalPoints += 1;
    }
  }
  return totalPoints;
}

console.log(points(["3:2", "2:2", "0:1"]));
