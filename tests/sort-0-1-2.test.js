// Write a program to sort an array of 0's,1's and 2's in ascending order.
// https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0
// Solution from http://users.monash.edu/~lloyd/tildeAlgDS/Sort/Flag/

const sortList = (list) => {
    let low = 0;
    let high = list.length - 1;
    let middle = 0;
    let temp;

    while(middle <= high) {
        switch(list[middle]) {
            case 0:
                temp = list[low];
                list[low] = list[middle];
                list[middle] = temp;
                low++;
                middle++;
                break;
            case 1:
                middle++;
                break;
            case 2:
                temp = list[middle];
                list[middle] = list[high];
                list[high] = temp;
                high--;
                break;
        }
    }

    return list;
};

describe('Sort array with 0, 1 and 2', () => {
    it('test 1', () => {
        const firstTest = [0, 2, 1, 2, 0];
        const result = sortList(firstTest);
    });
});
