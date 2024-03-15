// https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript
function getCount(str) {
  let result = []
  str.split("").map((val) => {
    if (val === "a" || val === "i" || val === "u" || val === "e" || val === "o")
      result.push(val);
  });

  return result.length
}

console.log(getCount("ibricidibri"));
