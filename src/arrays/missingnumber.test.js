// Given an array of size n-1 and given that there are numbers from 1 to n with one missing,
// the missing number is to be found.
// https://practice.geeksforgeeks.org/problems/missing-number-in-array/0

const missingNumber = (list) => {
    let previous = 0;

    for(let i = 0; i < list.length; i++) {
        const difference = list[i] - previous;

        if (difference > 1) {
            return list[i] - 1;
        }

        previous = list[i];
    }
};

describe('Missing Number', () => {
    it('test 1', () => {
        const firstTest = [1, 2, 3, 5];
        const result = missingNumber(firstTest);

        expect(result).toEqual(4);
    });

    it('test 2', () => {
        const firstTest = [1, 2, 3, 4, 5, 6, 8];
        const result = missingNumber(firstTest);

        expect(result).toEqual(7);
    });
});
