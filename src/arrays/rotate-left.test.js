/**
 * A left rotation operation on an array shifts each of the array's elements 1 unit to the left.
 * Given an array a of integers and a number d, perform d left rotations on the array.
 * Return the updated array to be printed as a single line of space-separated integers.
 */

const rotateLeft = (arr, times) => {
    if (times % arr.length === 0) return arr;

    if (times === 0) return arr;

    const itemsToRotate = times > arr.length ? times % arr.length : times;
    const fixedItems = arr.slice(itemsToRotate, arr.length);
    const rotatedItems = arr.slice(0, itemsToRotate);

    return fixedItems.concat(rotatedItems);
};

describe('Rotate Left', () => {
    it('test 1', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = rotateLeft(arr, 4);

        expect(result).toEqual([5, 1, 2, 3, 4]);
    });

    it('test 2', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = rotateLeft(arr, 10);

        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('test 3', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = rotateLeft(arr, 13);

        expect(result).toEqual([4, 5, 1, 2, 3]);
    });
});

/**
 * length = 5
 * times = 4

 * itemsToRotate = 4
 * length = 5
 * times = 12

 * itemsToRotate = 2
 */
