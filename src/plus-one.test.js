/* eslint-disable no-plusplus */
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
// You are given a large integer represented as an integer array digits, where each digits[i]
// is the ith digit of the integer. The digits are ordered from most significant to least
// significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

const plusOne = (digits) => {
    let shouldTakeOne = true;

    for (let i = digits.length - 1; i >= 0 && shouldTakeOne; i--) {
        const iDigit = digits[i];
        const iDigitPlusOne = iDigit + 1;

        if (iDigitPlusOne < 10) {
            shouldTakeOne = false;
            digits[i] = iDigitPlusOne;
        } else {
            shouldTakeOne = true;
            digits[i] = 0;
        }
    }

    if (shouldTakeOne) {
        digits.unshift(1);
    }

    return digits;
};

describe('Plus one', () => {
    it('test 1', () => {
        const digits = [1, 2, 3];
        const result = plusOne(digits);

        expect(result).toEqual([1, 2, 4]);
    });

    it('test 2', () => {
        const digits = [4, 3, 2, 1];
        const result = plusOne(digits);

        expect(result).toEqual([4, 3, 2, 2]);
    });

    it('test 3', () => {
        const digits = [9];
        const result = plusOne(digits);

        expect(result).toEqual([1, 0]);
    });

    it('test 4', () => {
        const digits = [9, 9, 9, 9];
        const result = plusOne(digits);

        expect(result).toEqual([1, 0, 0, 0, 0]);
    });
});
