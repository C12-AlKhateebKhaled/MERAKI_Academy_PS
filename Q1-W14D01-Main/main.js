/* First Reverse */

/*  
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.*/

const firstReverse = (str) => {
  /* 
1. Convert the String to an Array using `split('')`.
2. Reverse the Array using `reverse()`.
3. Convert the Array Back to a String using `join('')`.
4. Return the Reversed String.
*/
  const reversedStr = str.split("").reverse().join("");

  return reversedStr;
};

/*
Examples:
firstReverse("I Love Code"); // => "edoC evoL I"
firstReverse("Hello World"); // => "dlroW olleH"
firstReverse("How are you?"); // => "?uoy era woH"
firstReverse(""); // => ""
*/
module.exports = { firstReverse };
