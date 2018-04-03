/* Write a function `isPalindrome()` to determine whether an input string is a palindrome or not

A palindrome is a word, phrase, number, or other sequence of characters which
reads the same backward as forward, such as madam or racecar.

`input` will be a single string without spaces and punctuation. */

const evenLengthPalindrome = array => {
  let buffer = array.length - 1;
  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] === array[buffer]) {
      buffer--;
      continue;
    }
    return false;
  }
  return true;
};

const oddLengthPalindrome = array => {
  let oddBuffer = array.length - 1;
  let oddMiddle = Math.floor(array.length / 2);
  for (let i = 0; i < oddMiddle; i++) {
    if (array[i] === array[oddBuffer]) {
      oddBuffer--;
      continue;
    }
      return false;
  }
  return true;
};

const isPalindrome = input => {
  if (input.length === 0 || input.length === 1) {
    return true;
  }
  if (input.length % 2 === 0) {
    return evenLengthPalindrome(input);
  } else {
    return oddLengthPalindrome(input);
  }
};

module.exports = isPalindrome;
