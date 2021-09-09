import { addTwoDigits } from './addTwoDigits';

describe(addTwoDigits.name, () => {
    test('addTwoDigits should return 11', () => {
        const num = 29 ;
        const expected = addTwoDigits(num);

        expect(expected).toBe(11);
    })

    test('addTwoDigits should return 11 when argument is 29', () => {
        const num = 29 ;
        const expected = addTwoDigits(num);

        expect(expected).toBe(11);
    })
})