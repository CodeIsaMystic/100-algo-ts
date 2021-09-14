export function isCaseInsensitivePalindrome(inputString: string): boolean {
  const originalLowerCase = inputString.toLowerCase()
  const reversedWord = originalLowerCase
    .toUpperCase()
    .split("")
    .reverse()
    .join("")

  return originalLowerCase === reversedWord
}

console.log(isCaseInsensitivePalindrome("AaBaa"))
console.log(isCaseInsensitivePalindrome("abac"))
