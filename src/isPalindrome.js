/* Write a function `isPalindrome()` to determine whether an input string is a palindrome or not

A palindrome is a word, phrase, number, or other sequence of characters which
reads the same backward as forward, such as madam or racecar.

`input` will be a single string without spaces and punctuation. */

const checkPalindrome = array => {
  let buffer = array.length - 1;
  let middle = Math.floor(array.length / 2);
  for (let i = 0; i < middle; i++) {
    if (array[i] === array[buffer]) {
      buffer--;
      continue;
    }
      return false;
  }
  return true;
};

const isPalindrome = input => {
  if (input.length === 0 || input.length === 1) {
    return true;
  }else{
    return checkPalindrome(input);
  }
};

module.exports = isPalindrome;
