/* timesOfMostFreqChar */

/*  
Write a function returns the number of occurrences of the most frequent character in a sentence.
Ignore any space character.
*/

const timesOfMostFreqChar = (str) => {
  const charFrequency = {};

  // Count frequency of each character, ignoring spaces
  for (const char of str) {
    if (char !== ' ') {
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
  }

  // Find the maximum frequency
  let maxFrequency = 0;
  for (const freq of Object.values(charFrequency)) {
    maxFrequency = Math.max(maxFrequency, freq);
  }

  return maxFrequency;
};

/* 
Examples:
timesOfMostFreqChar('hello all') // => 4
timesOfMostFreqChar('hello all lol') // => 6
 timesOfMostFreqChar('hello all lool woooow') // => 7
timesOfMostFreqChar('hello all lol wow www.com') // => 6
timesOfMostFreqChar('Hi john') // => "no occurrences all return once"
*/
module.exports = { timesOfMostFreqChar };
