/* Reverse Each Word */

/*  
Write a function reverses the characters of every word of a sentence. sentences contain only English letter and space characters.
*/

const reverseEachWord = (str) => {
  /*
1. Split the string into words.
2.reverse each word.
3.jpoin back into a string 
*/
  const splited = str.split(" ");
  const reversedStr = splited
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

  console.log(splited);
  console.log(reversedStr);
};
reverseEachWord("Hello world");

/* 
Examples:
reverseEachWord("Hello world") // => "olleH dlrow"
reverseEachWord("Hello guys") // => "olleH syug"
reverseEachWord("It’s about what you can figure out") // => "s’tI tuoba tahw uoy nac erugif tuo"
reverseEachWord("      ") // => "Wrong!! it's empty string"

*/
module.exports = { reverseEachWord };
