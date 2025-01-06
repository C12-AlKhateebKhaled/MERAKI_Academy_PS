/* fizzBuzz */
/*
--- Directions
     - Write a program that console logs the numbers from 1 to n
     - For multiples of three print “fizz” instead of the number
     - For the multiples of five print “buzz”
     - For numbers which are multiples of both 3 and 5 print “fizzbuzz”
--- Example
      fizzBuzz(5);
      |  1    |
      |  2    |
      |  fizz |   
      |  4    |
      |  buzz |   
*/

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    let prnt;
    if (i % 3 === 0 && i % 5 === 0) {
      prnt = "fizzbuzz";
    } else if (i % 3 === 0) {
      prnt = "fizz";
    } else if (i % 5 === 0) {
      prnt = "buzz";
    } else prnt = i;
    console.log(prnt);
  }
};

module.exports = { fizzBuzz };
