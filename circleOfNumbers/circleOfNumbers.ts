export function circleOfNumbers(n: number, firstNumber: number): number {
  const numArr = []
  const halfWay = n / 2

  for (let i = 0; i < n; i++) {
    numArr.push(i)
  }

  if (firstNumber < halfWay) {
    return numArr[firstNumber + halfWay]
  }

  return numArr[firstNumber - halfWay]
}

// console.log(circleOfNumbers(10, 2));
