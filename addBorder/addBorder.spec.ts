import { addBorder } from './addBorder';


describe(addBorder.name, () => {
    test('the wall string variable should be added in the first and the last index to the picture array, the others indexes should start and finish with * ', () => {
        // arrange
        const picture = ['abc, ded'];

        // act
        const expected = addBorder(picture);

        // assert
        expect(expected).toBe([
            "*****",
            "*abc*",
            "*ded*",
            "*****"
        ])
    })
})