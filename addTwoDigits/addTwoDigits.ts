export function addTwoDigits(num: any): number {
  const digits = num.toString().split('')
  
  return digits.reduce((acc: string, currentValue: string) => {

    return parseInt(acc) + parseInt(currentValue)
  })
}


console.log(addTwoDigits(29));
