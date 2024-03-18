// https://www.codewars.com/kata/523f5d21c841566fde000009/
export function arrayDiff(a: number[], b: number[]): number[] {
  return b.reduce((prev, curr) => {
    return prev.filter((val) => val !== curr);
  }, a);
}
