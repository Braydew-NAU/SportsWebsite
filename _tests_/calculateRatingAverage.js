import { calculateRatingAverage } from '../scripts/movieshowscript.js';

test('calculateRatingAverage returns correct average', () => {
  const ratings = [5, 4, 3];
  const avg = calculateRatingAverage(ratings);
  expect(avg).toBeCloseTo(4.0);
});