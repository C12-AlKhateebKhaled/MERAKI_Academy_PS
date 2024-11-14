/* findHighestPossibleSum */

/*  
Write a function calculates the Highest possible sum of any n consecutive numbers in an array arr of integers (where n ≥ 1).
*/

const findHighestPossibleSum = (arr, num) => {
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  console.log(maxSum);
  let sum = maxSum;

  for (let i = num; i < arr.length; i++) {
    sum = sum + arr[num + 1];
    console.log(sum);
  }
};
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 1); // => 10

/*
Examples:
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 1) // => 10
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 2) // => 14
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 3) // => 16
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 4) // => 20
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 5) // => 23

findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10
findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 14
findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22
findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 26
findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 29


findHighestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10
findHighestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 19
findHighestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22
findHighestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 32
findHighestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 36
*/
module.exports = { findHighestPossibleSum };
