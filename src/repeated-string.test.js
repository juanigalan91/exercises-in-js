/**
 * Complete the repeatedString function in the editor below.
 * It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.
 * repeatedString has the following parameter(s):
 * s: a string to repeat
 * n: the number of characters to consider
 */

const repeatedString = (s, n) => {
    const counta = str => str.split('')
        .filter(c => c === 'a')
        .length;

    const repetitions = Math.floor(n / s.length);
    const r = n - (s.length * repetitions);
    return repetitions * counta(s) + counta(s.substr(0, r));
};

describe('Repeated string', () => {
    it('test 1', () => {
        const string = 'aba';
        const result = repeatedString(string, 10);

        expect(result).toBe(7);
    });

    it('test 2', () => {
        const string = 'gfcaaaecbg';
        const result = repeatedString(string, 547602);

        expect(result).toBe(164280);
    });
});
