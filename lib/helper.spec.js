import { randomAlpahNumeric, sleep } from './helper';

describe('helper', () => {
  describe('randomAlpahNumeric', () => {
    it('should create random alpah numeric string to given length', () => {
      const lens = [1, 5, 10];
      expect(lens.map(randomAlpahNumeric).map((val) => val.length)).toEqual(lens);
    });
  });

  describe('sleep', () => {
    it('should sleep to finish between setTimeouts', async () => {
      const waitTimes = [5, 10, 15];
      const completedTimes = [];
      setTimeout(() => completedTimes.push(waitTimes[0]), waitTimes[0]);
      setTimeout(() => completedTimes.push(waitTimes[2]), waitTimes[2]);
      await sleep(waitTimes[1]);
      completedTimes.push(waitTimes[1]);
      await sleep(10); // wait for final timer
      expect(completedTimes).toEqual(waitTimes);
    });
  });
});