export function candies(n: number, m: number): number {
  const candy = Math.floor(m / 3)

  return candy * n
}

console.log(candies(3, 10))
