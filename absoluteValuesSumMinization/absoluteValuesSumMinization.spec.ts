import { absoluteValuesSumMinimization } from './absoluteValuesSumMinization';



describe(absoluteValuesSumMinimization.name, () => {
    test('if it finds the 4 from the array data', () => {
        const data = [2, 4, 7];
        const expected = absoluteValuesSumMinimization(data);

        expect(expected).toBe(4);
    });

    test('if it finds the 7 from the array data', () => {
        const data = [2, 4, 7, 6, 6];
        const expected = absoluteValuesSumMinimization(data);

        expect(expected).toBe(7);
    });



    
    test('From the a.length, it finds the medium integer value of the array', () => {
        const data = [2, 4, 7];
        const expected = absoluteValuesSumMinimization(data);

        expect(expected).toBe(4);
    });

    test('From the a.length, it finds the medium integer value -1 of the array', () => {
        const data = [2, 4, 7, 6];
        const expected = absoluteValuesSumMinimization(data);

        expect(expected).toBe(4);
    });

    test('From the a.length, it finds the medium integer value of the array', () => {
        const data = [2, 4, 7, 6, 6];
        const expected = absoluteValuesSumMinimization(data);

        expect(expected).toBe(7);
    });

    test('From the a.length, it finds the medium integer value -1 of the array', () => {
        const data = [2, 4, 7, 6, 6, 8]
        const expected = absoluteValuesSumMinimization(data)

        expect(expected).toBe(7)
    });
});
