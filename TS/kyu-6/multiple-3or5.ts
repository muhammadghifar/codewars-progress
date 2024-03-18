// https://www.codewars.com/kata/514b92a657cdc65150000006

export class Challenge {
  static solution(number: number) {
    if (number < 0) {
      return 0;
    }

    return Array.from({ length: number }, (_, i) => i).reduce((prev, curr) => {
      if (curr % 3 === 0 || curr % 5 === 0) {
        return prev + curr;
      }
      return prev;
    }, 0);
  }
}
