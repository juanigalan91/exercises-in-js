// Given arrival and departure times of all trains that reach a railway station,
// find the minimum number of platforms required for the railway station so that no train waits.
// https://practice.geeksforgeeks.org/problems/minimum-platforms/0

const calculateMinimumPlatforms = (arrivals, departures) => {
    let auxDepartures = [];
    let platforms = 1;

    for(let i = 0; i < arrivals.length; i++) {
        const nextArrival = arrivals[i + 1];
        const departure = departures[i];

        auxDepartures.push(departure);

        if (nextArrival && departure > nextArrival) {
            let needsNewPlatform = false;
            for(let j = 0; j < auxDepartures.length && !needsNewPlatform; j++) {
                needsNewPlatform = auxDepartures[j] <= nextArrival;

                if (needsNewPlatform) {
                    auxDepartures.splice(j, 1, departure);
                    auxDepartures.pop();
                    platforms++;
                }
            }
        }
    }

    return platforms;
};

describe('Minimum Platforms', () => {
    it('test 1', () => {
        const arrivals = [900, 940, 950, 1100, 1500, 1800];
        const departures = [910, 1200, 1120, 1130, 1900, 2000]
        const result = calculateMinimumPlatforms(arrivals, departures);

        expect(result).toEqual(3);
    });
});