/* maximumProductOfThree */

/*  
Write a function accepts an array of integers and returns the Maximum product possible from three of those numbers.
*/

const maximumProductOfThree = (arr) => {
  if (arr.length < 3) {
    throw new Error("Array must have at least three numbers");
  }

  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Maximum product can be from:
  // 1. The largest three numbers
  // 2. The two smallest numbers (if negative) and the largest number
  const n = arr.length;
  const maxProduct = Math.max(
    arr[n - 1] * arr[n - 2] * arr[n - 3], // Three largest numbers
    arr[0] * arr[1] * arr[n - 1]         // Two smallest and the largest
  );

  return maxProduct;
};

/*
Examples:
maximumProductOfThree([3, 1, 3, 7]); // => 63
maximumProductOfThree([0, 2, 3]); // => 0
maximumProductOfThree([2, 3, 5]); // => 30
maximumProductOfThree([10, 4, 5]); // => 200
maximumProductOfThree([7, 0, 5]); // => 0
*/
module.exports = { maximumProductOfThree };
