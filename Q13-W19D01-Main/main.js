/* evenAppearance */

/*  
Find the first item which appear an even number of times in an array.
*/

const evenAppearance = (array) => {
  const countMap = {};

  // Count the appearance of each item
  for (let item of array) {
    countMap[item] = (countMap[item] || 0) + 1;
  }

  // Find the first item with an even count
  for (let item of array) {
    if (countMap[item] % 2 === 0) {
      return item;
    }
  }

  // Return undefined if no item with even appearances is found
  return undefined;
};
evenAppearance([1, 1, 2, 6, 6]);
/*
Examples:
evenAppearance([1, 1, 2, 6, 6]) // => 1
evenAppearance([1, 2, 2, 9, 8, 8, 6, 6]) // => 2
evenAppearance([1, 9, 7, 3, 6, 6, 8, 9, 9]) // => 6
evenAppearance([1, 9, 7, 3, 6, 6, 8, 9]) // => 9
*/
module.exports = { evenAppearance };
