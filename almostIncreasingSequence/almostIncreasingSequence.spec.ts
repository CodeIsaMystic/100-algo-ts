import { almostIncreasingSequence } from './almostIncreasingSequence';

describe(almostIncreasingSequence.name, () => {
    it('Test 1', () => {
        const data = [1, 3, 2, 1];
        const expected = almostIncreasingSequence(data);

        expect(expected).toBe(false);
    });

    it('Test 2', () => {
        const data = [1, 3, 2];
        const expected = almostIncreasingSequence(data);

        expect(expected).toBe(true);
    });
});
