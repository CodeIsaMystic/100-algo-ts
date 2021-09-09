import { adjacentElementsProduct } from './adjacentElementsProduct';

describe(adjacentElementsProduct.name, () => {
    test('in an array of integers and find the product of the two first pair indexes', () => {
        const data = [3, 6];
        const expected = adjacentElementsProduct(data);

        expect(expected).toBe(18);
    })

    test('and find the largest pair product of the indexes', () => {
        const data = [3, 6, -2, -5, 7, 3];
        const expected = adjacentElementsProduct(data);

        expect(expected).toBe(21);
    })
})
