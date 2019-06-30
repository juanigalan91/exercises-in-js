// John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// https://www.hackerrank.com/challenges/sock-merchant/problem

const sockMerchant = (total, socks) => {
    const possiblePairs = {};
    let pairs = 0;

    for (let i = 0; i < total; i += 1) {
        const sock = socks[i];
        let currentPairForSock = possiblePairs[sock];

        if (currentPairForSock) {
            currentPairForSock += 1;

            if (currentPairForSock === 2) {
                pairs += 1;
                possiblePairs[sock] = 0;
            } else {
                possiblePairs[sock] = currentPairForSock;
            }
        } else {
            possiblePairs[sock] = 1;
        }
    }

    return pairs;
};

describe('Sock Merchant', () => {
    it('test 1', () => {
        const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];

        expect(sockMerchant(9, socks)).toEqual(3);
    });
});
