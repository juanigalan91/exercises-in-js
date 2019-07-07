// Given an array of n positive integers.
// Write a program to find the sum of maximum sum subsequence of the given array such that the integers in the subsequence are sorted in increasing order.
// https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence/0

const maximumIncreasingSequence = (list) => {
    let sum = list[0];
    let maxSum = sum;

    for (let i = 1; i < list.length; i += 1) {
        const previous = list[i - 1];

        if (previous > list[i]) {
            sum -= list[i - 1];
        }

        sum += list[i];

        if (sum > maxSum) {
            maxSum = sum;
        }
    }

    return maxSum;
};

describe('Maximum Increasing sequence', () => {
    it('test 1', () => {
        const firstTest = [1, 101, 2, 3, 100, 4, 5];
        const result = maximumIncreasingSequence(firstTest);

        expect(result).toBe(106);
    });
});
