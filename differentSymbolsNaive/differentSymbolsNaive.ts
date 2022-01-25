export function differentSymbolsNaive(s: string): number {
  /* solution 1 */
  const uniqueChars: string[] = []
  const inputChars: string[] = s.split("")

  inputChars.forEach((char) => {
    if (!uniqueChars.includes(char)) uniqueChars.push(char)
  })

  return uniqueChars.length
  /*  solution 2 */
  /**********************************************
   const uniqueChars = {}
   const inputChars = s.split("")
   
   inputChars.forEach((char) => (uniqueChars[char] = 1))
   
   return Object.keys(uniqueChars).length
   **********************************************/
  /* solution 3 */
  /********************************************** 
   const uniqueChars = new Set()
  const inputChars = s.split("")
  
  inputChars.forEach((char) => uniqueChars.add(char))
  
  return uniqueChars.size
 ***********************************************/
}

// console.log(differentSymbolsNaive('cabca'));
