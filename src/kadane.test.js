// Given an array containing both negative and positive integers.
// Find the contiguous sub-array with maximum sum.
// https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0

const maxContigousArray = (list) => {
    let currentSum = list[0];
    let maxSum = list[0];

    for (let i = 1; i < list.length; i += 1) {
        const sum = currentSum + list[i];
        const max = Math.max(sum, list[i]);

        if (max > currentSum) {
            currentSum = max;
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
};

describe('Kadanes Algorithm', () => {
    it('test 1', () => {
        const firstTest = [1, 2, 3];
        const result = maxContigousArray(firstTest);

        expect(result).toEqual(6);
    });

    it('test 2 - with negatives', () => {
        const firstTest = [-1, 4, 2, -1];
        const result = maxContigousArray(firstTest);

        expect(result).toEqual(6);
    });
});
