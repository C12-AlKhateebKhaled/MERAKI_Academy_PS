/* isValidWalk */
/*
You live in the new city where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- every time you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!). */

const isValidWalk = (walks) => {
  if (walks.length !== 10) {
    return false;
  }

  let NS = 0;
  let EW = 0;

  for (let i = 0; i < 10; i++) {
    if (walks[i] === "N") {
      NS += 1;
    }
    if (walks[i] === "S") {
      NS -= 1;
    }
    if (walks[i] === "E") {
      EW += 1;
    }
    if (walks[i] === "W") {
      EW -= 1;
    }
  }

  console.log("NS : ", NS);
  console.log("EW : ", EW);
  
  if (EW === 0 && NS === 0) {
    return true;
  }
};
isValidWalk(["N", "S", "E", "W", "W", "E"]);

/*
Examples:
isValidWalk(["N", "S", "E", "W", "W", "E"]); => false
isValidWalk(["N", "S", "E", "W", "N", "S", "E", "W", "N", "S", "E"]); => false
isValidWalk(['N', 'S', 'E', 'W', 'N', 'S', 'E', 'W', 'N', 'S']); => true
*/
module.exports = { isValidWalk };
