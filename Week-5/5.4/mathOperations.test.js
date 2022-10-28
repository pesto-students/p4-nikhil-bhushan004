const mathOperations = require('./mathOperations')

test('add two numbers', () => {
  expect(mathOperations.sum(1,2)).toBe(3);
})

test('diff b/w two numbers', () => {
  expect(mathOperations.diff(1,2)).toBe(1);
})

test('product of two numbers', () => {
  expect(mathOperations.product(1,2)).toBe(2);
})