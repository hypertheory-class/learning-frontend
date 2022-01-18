export function isEven(n: number): boolean {
  return n % 2 === 0;
}
export function isOdd(n: number): boolean {
  return !isEven(n);
}

export const PI = 3.1415927;

export class Customer {}

export const add = (a: number, b: number) => a + b;

function isBigNumber(n: number) {
  return n > 1000;
}
