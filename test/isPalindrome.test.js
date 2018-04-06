// Test cases: actual --> expected
// isPalindrome('') --> true
// isPalindrome('a') --> true
// isPalindrome('ab') --> false
// isPalindrome('abc') --> false
// isPalindrome('abba') --> true
// isPalindrome('tacocat') --> true
// isPalindrome('racecar') --> true
// isPalindrome('umbrella') --> false isPalindrome from "../src/isPalindrome"


const isPalindrome = require("../src/isPalindrome");

it('empty string should return true', () => {
  expect(isPalindrome('')).toEqual(true);
});

it('string with length of 1 should return true', () => {
  expect(isPalindrome("a")).toEqual(true);
});

it('should return false when the length of the input is even', () => {
  expect(isPalindrome('ab')).toEqual(false);
});

it('should return true when the length of the input is even but the have the same character', () => {
  expect(isPalindrome('aa')).toEqual(true);
});

it('should return false when the length of the input is odd when the string is not palindrome', () => {
  expect(isPalindrome("abc")).toEqual(false);
});

it('should return true when the length of the input is odd when the string is palindrome', () => {
  expect(isPalindrome("aba")).toEqual(true);
});

it('should return true for tacocat', () => {
  expect(isPalindrome('tacocat')).toEqual(true);
});

it('should return true for racecar', () => {
  expect(isPalindrome('racecar')).toEqual(true);
});

it('should return true for umbrella', () => {
  expect(isPalindrome('umbrella')).toEqual(false);
});