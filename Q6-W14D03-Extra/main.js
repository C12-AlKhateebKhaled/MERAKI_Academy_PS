/* arrayCenter */

/*  
have an array of negative/positive integers, return the element in the middle position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

const arrayCenter = (arr) => {
  /*
1. Find array length.
2. If array Length is odd, return the item of index of (array Length / 2)
3. 


*/

  const arrLength = arr.length;
  if (arrLength % 2 === 1) {
    const middleIndex = Math.floor(arrLength / 2);
    return arr[middleIndex];
  }
  
  console.log(arrLength, itemIndex);
};
arrayCenter([2, 3, -4, 6, 1, 5]);
/*
Examples:
arrayCenter([2, 3, -4, 6, 1, 5]); // => 1
arrayCenter([2, 3, 4, -6, 2]); // => 4
arrayCenter([2, 3, 2, 9, 2]); // => 2
arrayCenter([2, 5, 1]); // => 5
arrayCenter([2, 3]); // => 2.5
arrayCenter([]); // => "empty Array"
*/
module.exports = { arrayCenter };
