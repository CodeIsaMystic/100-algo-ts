import { alphabeticShift } from './alphabeticShift';

describe('alphabet', () => {
    it('should decompose a string in an Array', () => {
        const string = 'crazy'
        const expected = string.split('')
        
        expect(expected).toEqual(['c','r','a','z','y'])
    })
    
    it('should display each letter following in the alphabet for a string as input crazy => dsbaz', () => {
        const inputString = 'crazy'
        const expected = alphabeticShift(inputString)
    
        expect(expected).toBe('dsbaz')
    })
})
