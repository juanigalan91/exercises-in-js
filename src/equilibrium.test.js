// Given an array A your task is to tell at which position the equilibrium first occurs in the array.
// Equilibrium position in an array is a position such that the sum of elements below it is equal to the sum of elements after it.
// https://practice.geeksforgeeks.org/problems/equilibrium-point/0

const equilibriumPoint = (list) => {
    let leftSum = 0;
    let equilibrium;

    for (let i = 0; i < list.length; i += 1) {
        let rightSum = 0;
        for (let j = i + 1; j < list.length; j += 1) {
            rightSum += list[j];
        }

        if (rightSum === leftSum) {
            equilibrium = i;
            break;
        } else {
            leftSum += list[i];
        }
    }

    return equilibrium;
};


describe('Equilibrium', () => {
    it('test 1', () => {
        const firstTest = [1, 3, 5, 2, 2];
        const result = equilibriumPoint(firstTest);

        expect(result).toBe(2);
    });
});
