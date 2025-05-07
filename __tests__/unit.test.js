import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Tests for isPhoneNumber
test('isPhoneNumber - valid format (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber - valid format 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber - missing dashes', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('isPhoneNumber - wrong format', () => {
  expect(isPhoneNumber('12-34567890')).toBe(false);
});

// Tests for isEmail
test('isEmail - valid email simple', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('isEmail - valid email with underscore', () => {
  expect(isEmail('john_doe@domain.org')).toBe(true);
});
test('isEmail - missing "@" symbol', () => {
  expect(isEmail('test.example.com')).toBe(false);
});
test('isEmail - missing domain suffix', () => {
  expect(isEmail('user@domain')).toBe(false);
});

// Tests for isStrongPassword
test('isStrongPassword - valid short password', () => {
  expect(isStrongPassword('abcd')).toBe(true);
});
test('isStrongPassword - valid long password', () => {
  expect(isStrongPassword('Abc_1234567')).toBe(true);
});
test('isStrongPassword - starts with number', () => {
  expect(isStrongPassword('1abcde')).toBe(false);
});
test('isStrongPassword - contains special character', () => {
  expect(isStrongPassword('Abc@123')).toBe(false);
});

// Tests for isDate
test('isDate - valid single digit date', () => {
  expect(isDate('1/1/2020')).toBe(true);
});
test('isDate - valid double digit date', () => {
  expect(isDate('12/31/2022')).toBe(true);
});
test('isDate - wrong format with dashes', () => {
  expect(isDate('12-31-2022')).toBe(false);
});
test('isDate - year too short', () => {
  expect(isDate('12/31/22')).toBe(false);
});

// Tests for isHexColor
test('isHexColor - 3-digit hex with #', () => {
  expect(isHexColor('#ABC')).toBe(true);
});
test('isHexColor - 6-digit hex without #', () => {
  expect(isHexColor('123456')).toBe(true);
});
test('isHexColor - invalid characters', () => {
  expect(isHexColor('#XYZ')).toBe(false);
});
test('isHexColor - too many characters', () => {
  expect(isHexColor('#1234567')).toBe(false);
});