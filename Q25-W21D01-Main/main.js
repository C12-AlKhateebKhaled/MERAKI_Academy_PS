/* longestSequence */

/*  
Write a function returns the length of the longest sequence of 1s in an array of 1s and 0s.
*/

const longestSequence = (arr) => {
  let maxSequence = 0;
  let currentSequence = 0;

  for (const num of arr) {
    if (num === 1) {
      currentSequence++;
      maxSequence = Math.max(maxSequence, currentSequence);
    } else {
      currentSequence = 0;
    }
  }

  return maxSequence;
};

/*
Examples:
longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1]) // => 5
longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1]) // => 3
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 5
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1]) // => 6
longestSequence([1, 0, 0, 1]) // => 1
longestSequence([0, 0, 0, 0]) // => "There is no one sequenced"
*/
module.exports = { longestSequence };
