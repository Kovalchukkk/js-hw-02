const findLongestWord = function (string) {
  const arrayFromString = string.split(" ");
  
  let maxLength = arrayFromString[0].length;

  let maxItem = arrayFromString[0];

  for (const item of arrayFromString) {
    if (maxLength < item.length) {
      maxLength = item.length;
      maxItem = item;
    }
  }

  return maxItem;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
