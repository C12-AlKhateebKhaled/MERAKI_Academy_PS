/* Is Power Of Two */

/*  
Write a function returns true if a number is a power of 2, and false if not.
*/

const isPowerOfTwo = (num) => {
  /*
1. Power of 2 must be Positive and more than 0.
2. If we devide the number by 2 repeativly , we should have 1.

*/

  if (num <= 0) return false;

  while (num % 2 === 0) {
    num /= 2;
  }

  const result = num === 1;
  return result;
};

/*
Examples:
isPowerOfTwo(0) // => false
isPowerOfTwo(1) // => true
isPowerOfTwo(2) // => true
isPowerOfTwo(4) // => true
isPowerOfTwo(6) // => false
isPowerOfTwo(11) // => false
isPowerOfTwo(16) // => true
isPowerOfTwo(18) // => false
isPowerOfTwo(24) // => false
isPowerOfTwo(25) // => false
isPowerOfTwo(28) // => false
isPowerOfTwo(32) // => true
isPowerOfTwo(63) // => false
isPowerOfTwo(64) // => true
isPowerOfTwo(1023) // => false
isPowerOfTwo(1024) // => true
*/
module.exports = { isPowerOfTwo };
