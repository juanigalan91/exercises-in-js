// Write a program to print all the LEADERS in the array.
// An element is leader if it is greater than all the elements to its right side.
// The rightmost element is always a leader.
// https://practice.geeksforgeeks.org/problems/leaders-in-an-array/0

const leaders = (list) => {
    const leadersList = [];

    for (let i = 0; i < list.length - 1; i += 1) {
        const current = list[i];
        const next = list[i + 1];

        if (current > next) {
            leadersList.push(current);
        } else {
            for (let j = leadersList.length - 1; j >= 0; j -= 1) {
                if (next > leadersList[j]) {
                    leadersList.splice(j, 1);
                }
            }
        }
    }

    leadersList.push(list[list.length - 1]);
    return leadersList;
};

describe('Leaders', () => {
    it('test 1', () => {
        const firstTest = [16, 17, 4, 3, 5, 2];
        const result = leaders(firstTest);

        expect(result[0]).toBe(17);
        expect(result[1]).toBe(5);
        expect(result[2]).toBe(2);
    });
});
