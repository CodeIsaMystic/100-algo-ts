export function areSimilar(a: number[], b: number[]): boolean {
  const aNewArr: number[] = []
  let bNewArr: number[] = []

  if (a.toString() === b.toString()) return true

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      aNewArr.push(a[i])
      bNewArr.push(b[i])
    }
  }

  bNewArr = bNewArr.reverse()

  if (aNewArr.length === 2 && aNewArr.toString() === bNewArr.toString()) {
    return true
  }

  return false
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]))
console.log(areSimilar([1, 2, 3], [2, 1, 3]))
console.log(areSimilar([1, 2, 2], [2, 1, 1]))
