const isEvenNumberFromArray = (numbersArr: number[]) => {
    return (numbersArr.length % 2 ) === 0
}

export function absoluteValuesSumMinimization(values: number[]): number {
    
    return isEvenNumberFromArray(values) 
            ? values[(values.length /2 - 1)] 
            : values[Math.floor(values.length / 2)]
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));