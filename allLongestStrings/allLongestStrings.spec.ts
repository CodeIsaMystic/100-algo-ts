import { allLongestStrings } from './allLongestStrings';

describe(allLongestStrings.name, () => {

    it('find the longests words for words/strings and should be equal to ["aba", "vcd", "aba"]', () => {
        const data = ["aba", "aa", "ad", "vcd", "aba"];
        const expected = allLongestStrings(data);

        expect(expected).toEqual(["aba", "vcd", "aba"]);
    })
})
