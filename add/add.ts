export function add1(number1: number, number2: number): number {
  return number1 + number2
}

export function add2(...sumNumbers: number[]): number {
  return sumNumbers.reduce((previous, current) => {
    return previous + current
  })
}


/* add1  */
console.log(add1(1, 2));
console.log(add1(3, 2));

/* add2  */
console.log(add2(1,2,3,4,5));
console.log(add2(2,3));