/* findFactorial */

/*  
Given an integer n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

const findFactorial = (num) => {
  if (num < 0) return "Invalid input. Factorial is not defined for negative numbers.";
  if (num === 0 || num === 1) return 1; // Base case

  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

/*
Examples:
findFactorial(1); // => 1
findFactorial(3); // => 6
findFactorial(4); // => 24
findFactorial(6); // => 720
findFactorial(11); // => 39916800
*/
module.exports = { findFactorial };
