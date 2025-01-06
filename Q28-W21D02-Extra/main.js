/* findPrime */
/*
find all prime numbers less than or equal to n.
you should have one console log when you run the test file*/

const findPrimes = (n) => {
  if (n < 2) return [];

  const primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }

  return primes;
};

module.exports = { findPrime };
