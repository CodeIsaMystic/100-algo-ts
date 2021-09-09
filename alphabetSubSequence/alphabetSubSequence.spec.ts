import { alphabetSubsequence } from './alphabetSubsequence'

describe(alphabetSubsequence.name, () => {
    it('should be false with CDCE as stringInput', () => {
        const inputString = 'cdce'
        const expected = alphabetSubsequence(inputString)

        expect(expected).toBe(false)
    })

    it('should be false with EFFG as stringInput', () => {
        const inputString = 'effg'
        const expected = alphabetSubsequence(inputString)

        expect(expected).toBe(false)
    })

    it('should be true with ACE as stringInput', () => {
        const inputString = 'ace'
        const expected = alphabetSubsequence(inputString)

        expect(expected).toBe(true)
    })

    it('should be false with ZAB as stringInput', () => {
        const inputString = 'zab'
        const expected = alphabetSubsequence(inputString)

        expect(expected).toBe(false)
    })
})