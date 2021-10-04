const sum = require('./sum.js');

test('1 + 2 should equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
