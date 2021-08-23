import Validator from '../app';

const validated = new Validator();

test('truly', () => {
  const result = validated.validateUsername('The_Beast');
  expect(result).toBe(true);
});
test('no numbers in the beginning', () => {
  const result = validated.validateUsername('01snowmen');
  expect(result).toBe(false);
});
test('exseptional symbols', () => {
  const result = validated.validateUsername('the_#super');
  expect(result).toBe(false);
});
test('too many numbers', () => {
  const result = validated.validateUsername('the_Beast3685y');
  expect(result).toBe(false);
});
test('no exseptional symbols in the end', () => {
  const result = validated.validateUsername('the_Super56');
  expect(result).toBe(false);
});
test('no exseptional symbols in the end-2', () => {
  const result = validated.validateUsername('the_Super56_');
  expect(result).toBe(false);
});
