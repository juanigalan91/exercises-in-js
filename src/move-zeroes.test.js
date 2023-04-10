/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.
function moveZeroes(nums) {
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            // swap non-zero element with element at index i
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
    }

    return nums;
}

describe('Move Zeroes', () => {
    it('test 1', () => {
        const digits = [0, 1, 0, 3, 12];
        const result = moveZeroes(digits);

        expect(result).toEqual([1, 3, 12, 0, 0]);
    });

    it('test 1', () => {
        const digits = [1, 3, 0, 12, 0, 9];
        const result = moveZeroes(digits);

        expect(result).toEqual([1, 3, 12, 9, 0, 0]);
    });
});
