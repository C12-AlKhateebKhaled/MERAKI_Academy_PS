/* isPrime*/
/* 
  A prime number is a positive integer that is only divisible by 1 and itself.
  For example, 2, 3, 5, 7, 11 are the first few prime numbers.*/

const isPrime = (num) => {
  if (num <= 1) return false; // Numbers <= 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Check divisors from 2 to sqrt(number)
    }
  }
  return true; // No divisors found, so it's prime
};

module.exports = { isPrime };
