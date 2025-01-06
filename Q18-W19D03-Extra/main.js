/* removeNotUnique */

/*  
have a string, delete any characters that are not unique from the string.
Ignore any space character
*/

const removeNotUnique = (str) => {
  if (!str.trim()) return "it's empty"; // Check if string is empty or contains only spaces

  // Count frequency of each character ignoring spaces
  const charFrequency = {};
  for (const char of str) {
    if (char !== ' ') {
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
  }

  // Use split instead of Array.from
  const result = str
    .split('')
    .filter((char) => char === ' ' || charFrequency[char] === 1)
    .join('');

  return result.trim() ? result : "it's empty";
};

/* 
Examples:
removeNotUnique("memory") // => "eory"
removeNotUnique("hello lol") // => "he"
removeNotUnique("xyzj") // => "xyzj"
removeNotUnique("iiii") // => ""
removeNotUnique("") // => "it's empty"
removeNotUnique("       ") // => "it's empty"

*/
module.exports = { removeNotUnique };
