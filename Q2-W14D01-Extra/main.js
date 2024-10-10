/* Sum Odd Number */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

const sumOddNumber = (arr) => {
/* 
1. Use `filter` to select only the odd numbers in the array (`num % 2 !== 0`). 
2. Use `reduce` to accumulate the sum of the filtered odd numbers.

3. Return the final sum.
*/
  return arr.filter((num) => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
};
/*
Examples:
sumOddNumber([1, 2, 3, 4, 5]) // => 9
sumOddNumber([1, 5, 3, 4, 5]) // => 14
sumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
sumOddNumber([2, 4, 6,0 ]) // => 0
sumOddNumber([1, 5, 3, 4, 5]) // => 14
sumOddNumber([-2, 0, 4, -3, 5]) // => 2
sumOddNumber([]) // => 0
*/
module.exports = { sumOddNumber };
