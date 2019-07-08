/**
 * It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride!
 * There are a number of people queued up, and each person wears a sticker indicating
 * their initial position in the queue. Initial positions increment by  from  at the front of the line to  at the back.
 * Any person in the queue can bribe the person directly in front of them to swap positions.
 * If two people swap positions, they still wear the same sticker denoting their original places in line.
 * One person can bribe at most two others. For example, if and  bribes , the queue will look like this: .
 * Fascinated by this chaotic queue, you decide you must know the minimum number of bribes
 * that took place to get the queue into its current state!

 * [1, 2, 3, 4, 5] => [1, 2, 3, 5, 4] => [1, 2, 5, 3, 4] => [2, 1, 5, 3, 4]
 */

const minimumBribes = (queue) => {
    if (queue.length !== 1) {
        const bribesTaken = {};
        let bribes = 0;

        for (let i = 0; i < queue.length; i += 1) {
            const currentPosition = queue[i];
            const diffInPosition = (i + 1) - currentPosition;

            if (diffInPosition < 0 && diffInPosition >= -2) {
                if (bribesTaken[currentPosition] === 2) {
                    console.log('Too chaotic');
                    return 'Too chaotic';
                }

                if (diffInPosition * -1 > 2) {
                    console.log('Too chaotic');
                    return 'Too chaotic';
                }

                if (bribesTaken[currentPosition]) {
                    bribesTaken[currentPosition] += diffInPosition * -1;
                } else {
                    bribesTaken[currentPosition] = diffInPosition * -1;
                }

                bribes += diffInPosition * -1;
            }
        }

        console.log(bribes);
        return bribes;
    }
};

describe('New year chaos', () => {
    it('test 1', () => {
        const firstTest = [2, 1, 5, 3, 4];
        expect(minimumBribes(firstTest)).toBe(3);
    });

    it('test 2', () => {
        const firstTest = [2, 5, 1, 3, 4];
        expect(minimumBribes(firstTest)).toBe('Too chaotic');
    });

    it('test 3', () => {
        const firstTest = [5, 1, 2, 3, 7, 8, 6, 4];
        expect(minimumBribes(firstTest)).toBe('Too chaotic');
    });

    it('test 4', () => {
        const firstTest = [1, 2, 5, 3, 7, 8, 6, 4];
        expect(minimumBribes(firstTest)).toBe(7);
    });
});
