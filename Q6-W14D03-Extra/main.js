/* arrayCenter */

/*  
have an array of negative/positive integers, return the element in the middle position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

const arrayCenter = (arr) => {
  /*
1. Sort the array in ascending order
2. Find the middle index.
3. If array Length is odd, return the item of index of (array Length / 2)
 */

  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Find the middle index
  const arrLength = arr.length;
  const mid = Math.floor(n / 2);

  // Check if the number of elements is even
  if (arrLength % 2 === 0) {
    // Return the average of the two middle elements
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    // Return the middle element
    return arr[mid];
  }
};
arrayCenter([2, 3, -4, 6, 1, 5]);
/*
Examples:
arrayCenter([2, 3, -4, 6, 1, 5]); // => 1
arrayCenter([2, 3, 4, -6, 2]); // => 4
arrayCenter([2, 3, 2, 9, 2]); // => 2
arrayCenter([2, 5, 1]); // => 5
arrayCenter([2, 3]); // => 2.5
arrayCenter([]); // => "empty Array"
*/
module.exports = { arrayCenter };
