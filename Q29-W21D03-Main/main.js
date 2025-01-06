/* isArmstrong */

/*  
write function check if the given number is Armstrong number and return true or false accordingly.
An Armstrong number of three digits is an integer when its value equals the sum of a cube of digits to the number itself. 
An Armstrong number is always a three-digit number. Let’s understand Armstrong by giving an example: Here is a value of 153. 
If you want to know 153 is Armstrong number or not.
Input:
153    // 1 * 1 * 1 +  5 * 5 * 5 + 3 * 3 * 3 = 1 + 125 + 27 = 153
Output:
true
*/

const isArmstrong = (num) => {
  // Check if the number is exactly 3 digits
  if (num < 100 || num > 999) {
    return false;
  }

  // Convert the number to a string to iterate over its digits
  const digits = num.toString().split("");

  // Calculate the sum of the cubes of its digits
  const sumOfCubes = digits.reduce((sum, digit) => {
    return sum + Math.pow(parseInt(digit, 10), 3);
  }, 0);

  // Check if the sum of cubes equals the original number
  return sumOfCubes === num;
};

/*
Examples:
console.log(isArmstrong(407));//true
console.log(isArmstrong(370));// true
console.log(isArmstrong(371));// true
console.log(isArmstrong(153));// true
console.log(isArmstrong(154));// false
console.log(isArmstrong(152514214));// false

*/

module.exports = { isArmstrong };
