/* Unique Item */

/*  
Write a function that returns the number of unique items in an array.
*/

const uniqueItems = (arr) => {
  /*
1. If array is empty , return 0.
2. Sort the array.
3. let Count = 1.
4. Loop through the sorted array, check if item is different from prev. . 
5. If deffernt , Add one to Count.
*/

  if (arr.length === 0) return 0;

  const sortedArr = arr.sort();

  let count = 1;

  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] !== sortedArr[i - 1]) {
      count++;
    }
  }
  console.log(count);

  return count;
};

uniqueItems([5, 77, 1, 3]);

/*
Examples:
uniqueItems([1, 1, 1, 1, 1]) // => 1
uniqueItems([3, 3, 5, 3]) // => 2
uniqueItems([5, 1, 1, 5, 1]) // => 2
uniqueItems([1, 6, 7]) // => 3
uniqueItems([1, 2, 3, 1, 2, 3]) // => 3
uniqueItems([5, 1, 2, 2, 1, 5]) // => 3
uniqueItems([5, 77, 1, 3]) // => 4
*/
module.exports = { uniqueItems };
