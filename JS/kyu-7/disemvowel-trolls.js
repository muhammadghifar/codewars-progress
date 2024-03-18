// https://www.codewars.com/kata/52fba66badcd10859f00097e
function disemvowel(str) {
  return str.replaceAll(/[aiueo]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!"));
