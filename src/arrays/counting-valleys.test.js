/**
 * Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography.
 * During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, U , or a downhill, D step.
 * Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:
   A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
   A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
   Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.
 */

const isStepDown = step => step === 'D';
const isStepUp = step => step === 'U';

const countingValleys = (steps, path) => {
    let seaLevel = 0;
    let valleys = 0;
    let isUnderSeaLevel = false;

    for (let i = 0; i < steps; i += 1) {
        const step = path[i];

        if (isStepUp(step)) {
            seaLevel += 1;
        } else if (isStepDown(step)) {
            seaLevel -= 1;
        }

        if (seaLevel < 0) {
            isUnderSeaLevel = true;
        }

        if (isUnderSeaLevel && seaLevel === 0) {
            isUnderSeaLevel = false;
            valleys += 1;
        }
    }

    return valleys;
};

describe('Counting Valleys', () => {
    it('test 1', () => {
        /**
         * _/\      _
         *    \    /
         *     \/\/
         */
        const path = ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U'];

        expect(countingValleys(8, path)).toEqual(1);
    });

    it('test 2', () => {
        /**        /\
         * _/\    /  \  _
         *    \  /    \/
         *     \/
         */
        const path = ['U', 'D', 'D', 'D', 'U', 'U', 'U', 'U', 'D', 'D', 'D', 'U'];

        expect(countingValleys(path.length, path)).toEqual(2);
    });
});
