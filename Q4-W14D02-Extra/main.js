/* Longest Word */

/*
write a function to return the largest word in the string
*/

const longestWord = (str) => {
  // Check if the string is empty
  if (str.trim() === "") {
    return "it's an empty string"; // Return a message for empty strings
  }

  // Split string into words
  const words = str.split(" ");

  // Find the longest word
  return words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
};

/* 
Examples:
longestWord("time dog cat"); // => "time"
longestWord("we love cats"); // => "love"
longestWord("dogs and cats are cute"); // => "dogs"
longestWord(""); // => "it's empty string"
*/
module.exports = { longestWord };
