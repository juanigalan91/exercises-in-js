// Given an array and an integer k, find the maximum for each and every contiguous subarray of size k
// https://practice.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k/0

const maximumSubarrays = (list, size) => {
    const maximums = [];
    let maximum = list[0];

    for (let i = 0; i < list.length; i += 1) {
        const item = list[i];

        if (item > maximum) {
            maximum = item;
        }

        if (i >= size - 1) {
            maximums.push(maximum);
        }
    }

    return maximums;
};

describe('Maximum Subarrays', () => {
    it('test 1', () => {
        const firstTest = [1, 2, 3, 5];
        const result = maximumSubarrays(firstTest, 3);

        expect(result).toEqual([3, 5]);
    });

    it('test 2', () => {
        const firstTest = [1, 2, 3, 1, 4, 5, 2, 3, 6];
        const result = maximumSubarrays(firstTest, 3);

        expect(result).toEqual([3, 3, 4, 5, 5, 5, 6]);
    });

    it('test 3', () => {
        const firstTest = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13];
        const result = maximumSubarrays(firstTest, 4);

        expect(result).toEqual([10, 10, 10, 15, 15, 90, 90]);
    });
});
