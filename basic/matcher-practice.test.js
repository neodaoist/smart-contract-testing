// Common Matchers

test('2 plus 2 should be 4', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment should work', () => {
  const data = {one: 1};
  data['two'] = 2;

  expect(data).toEqual({one: 1, two: 2});
});

test('adding two positive numbers should not be zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// Truthiness

test('null should match correctly', () => {
  const n = null;

  expect(n).toBeNull(); // matches only null
  expect(n).toBeDefined(); // is the opposite of toBeUndefined
  expect(n).not.toBeUndefined(); // matches only undefined
  expect(n).not.toBeTruthy(); // matches anything that an `if` statement treats as true
  expect(n).toBeFalsy(); // matches anything that an `if` statement treats as false
});

test('zero should match correctly', () => {
  const z = 0;

  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// Numbers

test('2 + 2 should match correctly', () => {
  const value = 2 + 2;

  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  expect(value).toBe(4); // toBe and toEqual are equivalent for numbers
  expect(value).toEqual(4);
});

test('should add floating point numbers correctly', () => {
  const value = 0.1 + 0.2;

  //expect(value).toBe(0.3); // Doesn't work due to rounding error
  expect(value).toBeCloseTo(0.3); // Do this instead
});

// Strings

test('there should be no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('there should be a "tom" in "Stomp"', () => {
  expect('Stomp').toMatch(/tom/);
});

// Arrays and Iterables

test('shopping list should contain batteries', () => {
  const shoppingList = [
    'aluminum foil',
    'batteries',
    'clorox wipes',
    'dental floss',
    'extra-strength tylenol'
  ];

  expect(shoppingList).toContain('batteries');
  expect(new Set(shoppingList)).toContain('batteries');
});

// Exceptions

const expectedError = 'you are on the wrong platform';

function compileAndroidCode() {
  throw new Error(expectedError);
}

test('attempting to compile Android should throw an error', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  expect(() => compileAndroidCode()).toThrow(expectedError);
  expect(() => compileAndroidCode()).toThrow(/platform/);
});
