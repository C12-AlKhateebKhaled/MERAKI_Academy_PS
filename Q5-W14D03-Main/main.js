/* Find Intersection */

/*  
Have the function findIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/

const findIntersection = (strArr) => {
  /*
1. Separate strArr to two Strings.
2. Remove the commas using split(", ").
3.[filteredArray] : Filter the included numbers, using filter and includes.
4. 
  * If there are common numbers , use join to return a comma-separated string.
  * If there is no intersection, return the string false.

*/
  const firstArray = strArr[0].split(", ");
  const secondArray = strArr[1].split(", ");

  const filteredArray = secondArray.filter((element) =>
    firstArray.includes(element)
  );
  const commaSeparatedString = filteredArray.join(", ");

  const result = filteredArray.length ? commaSeparatedString : false;

  console.log(
    firstArray,
    secondArray,
    filteredArray,
    commaSeparatedString,
    "Final Result: ",
    result
  );

  return result;
};
findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]);

/*
Examples:
findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
findIntersection(['2, 5, 7, 14', '1, 4, 13, 15, 25']); // => false
findIntersection(['', '1, 2, 4, 13, 15']); // => false
*/

module.exports = { findIntersection };
