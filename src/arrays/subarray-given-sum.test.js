// Given an unsorted array of non-negative integers, find a continuous sub-array which adds to a given number.
// https://practice.geeksforgeeks.org/problems/subarray-with-given-sum/0

const subarrayGivenSum = (list, wantedSum) => {
    let sum = 0;
    let start = 0;
    let indexes;

    for(let i = 0; i < list.length + 1; i++) {
        // 1. 0 > 5 ? F
        // 2. 1 > 5 ? F
        // 3. 2 > 5 ? F
        // 4. 6 > ? T
        while(sum > wantedSum) {
            // 4. sum = 6 - 1 = 5, start = 1
            sum = sum - list[start];
            start++;
        }

        if (sum === wantedSum) {
            indexes = {
                start: start,
                finish: i - 1
            }
            break;
        }

        // 1. sum = 1, start = 0
        // 2. sum = 2, start = 0
        // 3. sum = 6, start = 0
        sum = sum + list[i];
    }

    return indexes;
};

describe('Subarray of given sum', () => {
    it('test 1', () => {
        const firstTest = [1, 2, 3, 7, 5];
        const sum = 12;
        const result = subarrayGivenSum(firstTest, sum);

        expect(result.start).toEqual(1);
        expect(result.finish).toEqual(3);
    });

    it('test 2', () => {
        const firstTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const sum = 15;
        const result = subarrayGivenSum(firstTest, sum);

        expect(result.start).toEqual(0);
        expect(result.finish).toEqual(4);
    });
});
