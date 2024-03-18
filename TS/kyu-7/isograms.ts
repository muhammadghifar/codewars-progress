// https://www.codewars.com/kata/54ba84be607a92aa900000f1/typescript
export function isIsogram(str: string): boolean {
  let split: Array<string> = str.split("").map((char) => char.toLowerCase());

  return split.every((char, index) => {
    return split.indexOf(char) === index;
  });
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
