/**
 * const arr = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ];

    We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:
    a b c
      d
    e f g
 */

const canCalculateHourGlass = (x, y, max) => {
    const passesMaxX = x + 1 >= max || x + 2 >= max;
    const passesMaxY = y + 1 >= max || y + 2 >= max;

    return !passesMaxX && !passesMaxY;
};

const calculateHourGlass = (x, y, arr) => {
    const firstRow = arr[x].slice(y, y + 3);
    const firstRowSum = firstRow.reduce((acc, value) => acc + value);
    const middleValue = arr[x + 1][y + 1];
    const lastRow = arr[x + 2].slice(y, y + 3);
    const lastRowSum = lastRow.reduce((acc, value) => acc + value);

    return firstRowSum + middleValue + lastRowSum;
};

const hourglassSum = (arr) => {
    let max = -Infinity;
    const arrayLength = arr.length;

    for (let i = 0; canCalculateHourGlass(i, 0, arrayLength); i += 1) {
        for (let j = 0; canCalculateHourGlass(i, j, arrayLength); j += 1) {
            const hourglass = calculateHourGlass(i, j, arr);
            if (hourglass > max) {
                max = hourglass;
            }
        }
    }

    return max;
};

describe('Hour glass', () => {
    it('test 1', () => {
        const arr = [
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 2, 4, 4, 0],
            [0, 0, 0, 2, 0, 0],
            [0, 0, 1, 2, 4, 0]
        ];
        const result = hourglassSum(arr);

        expect(result).toBe(19);
    });

    it('test 2', () => {
        const arr = [
            [-1, -1, 0, -9, -2, -2],
            [-2, -1, -6, -8, -2, -5],
            [-1, -1, -1, -2, -3, -4],
            [-1, -9, -2, -4, -4, -5],
            [-7, -3, -3, -2, -9, -9],
            [-1, -3, -1, -2, -4, -5]
        ];
        const result = hourglassSum(arr);

        expect(result).toBe(-6);
    });
});
