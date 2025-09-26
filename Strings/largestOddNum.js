/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let maxOdd = 0;
  let currentSubstr = "";
  for (let i = 0; i < num.length; i++) {
    currentSubstr += s[i];
    if ((+currentSubstr & 1) == 1 && +currentSubstr > maxOdd) {
      maxOdd = +currentSubstr;
    }
  }
  return String(maxOdd);
};

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let index = num.length - 1;
  while (index >= 0) {
    if ((+num[index] & 1) == 1) {
      return num.substring(0, index);
    }
    index--;
  }

  return "";
};
