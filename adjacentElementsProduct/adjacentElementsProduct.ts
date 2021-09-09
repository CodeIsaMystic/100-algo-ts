export function adjacentElementsProduct(inputArray: number[]): number {
  let productsCalculatedAndFiltered = inputArray[0] * inputArray[1]
  
  for(let i = 1; i < inputArray.length - 1; i++) {
    const productItemsCalculated = inputArray[i] * inputArray[i + 1]
    
    productsCalculatedAndFiltered = productsCalculatedAndFiltered < productItemsCalculated 
                                      ? productItemsCalculated
                                      : productsCalculatedAndFiltered
  }


  return productsCalculatedAndFiltered
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));