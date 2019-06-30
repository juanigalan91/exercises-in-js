/**
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
 * Emma is playing a new mobile game that starts with consecutively numbered clouds.
 * Some of the clouds are thunderheads and others are cumulus.
 * She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1
 * or 2. She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma
 * to jump from her starting postion to the last cloud. It is always possible to win the game.
 * For each game, Emma will get an array of clouds numbered 0 if they are safe or 1
 * if they must be avoided. For example, c=[0,1,0,0,0,1,0] indexed from 0..6. The number on each cloud is its index in the
 * list so she must avoid the clouds at indexes 1 and 5.
 * Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.
 */

const isStepValid = step => typeof step !== 'undefined' && step === 0;

const jumpingOnClouds = (clouds) => {
    const movements = [];

    for (let i = 0; i < clouds.length; i += 1) {
        const nextStep = clouds[i + 1];
        const nextNextStep = clouds[i + 2];

        if (isStepValid(nextNextStep)) {
            movements.push(i + 2);
            i += 1;
        } else if (isStepValid(nextStep)) {
            movements.push(i + 1);
        }
    }

    return movements.length;
};

describe('Jummping on clouds', () => {
    it('test 1', () => {
        const clouds = [0, 0, 1, 0, 0, 1, 0];
        const result = jumpingOnClouds(clouds);

        expect(result).toBe(4);
    });

    it('test 2', () => {
        const clouds = [0, 0, 0, 0, 1, 0];
        const result = jumpingOnClouds(clouds);

        expect(result).toBe(3);
    });
});
