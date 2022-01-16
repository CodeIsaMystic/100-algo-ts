export function checkPalindrome(inputString: string): boolean {
  const originalWord = inputString.toLowerCase()

  const reversedWord = originalWord.split("").reverse().join("")

  return originalWord === reversedWord
}

// console.log(checkPalindrome("aabaa"))
// console.log(checkPalindrome("abac"))
// console.log(checkPalindrome("a"))
