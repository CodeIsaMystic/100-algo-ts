import { add1, add2 } from './add';




describe(add1.name, () => {
    test('add1 function is returned 3 as sum value', () => {
        const expected = add1(1, 2);

        expect(expected).toBe(3);
    })
})

describe(add2.name, () => {
    test('add2 function if it returns 3 as sum value', () => {
        const expected = add2(1, 2);

        expect(expected).toBe(3);
    })
})



describe(add1.name, () => {
    test('add1 function if it returns 3 the sum value with 1 and 2 as arguments', () => {
        const expected = add1(1, 2);

        expect(expected).toBe(3);
    })

    test('add1 function if it returns 5 the sum value with 3 and 2 as arguments', () => {
        const expected = add1(3, 2);

        expect(expected).toBe(5);
    })
})




describe(add2.name, () => {
    test('add2 function if it returns 15 of the data numbers array with values as arguments', () => {
        const data = [1, 2, 3, 4, 5];
        const expected = add2(...data);

        expect(expected).toBe(15);
    })

    test('add2 function if it returns 5 of the data numbers array with values as arguments', () => {
        const data = [2, 3];
        const expected = add2(...data);

        expect(expected).toBe(5);
    })
})