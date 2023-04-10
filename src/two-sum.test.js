// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
function twoSum(nums, target) {
    const indexes = [];

    for (let i = 0; i < nums.length; i++) {
        const numberToLookFor = target - nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === numberToLookFor) {
                indexes.push(i);
                indexes.push(j);

                break;
            }
        }

        if (indexes.length === 2) {
            break;
        }
    }

    return indexes;
}

describe('Two sum', () => {
    it('test 1', () => {
        const digits = [2, 7, 11, 15];
        const result = twoSum(digits, 9);

        expect(result).toEqual([0, 1]);
    });

    it('test 2', () => {
        const digits = [3, 2, 4];
        const result = twoSum(digits, 6);

        expect(result).toEqual([1, 2]);
    });

    it('test 3', () => {
        const digits = [3, 3];
        const result = twoSum(digits, 6);

        expect(result).toEqual([0, 1]);
    });
});
