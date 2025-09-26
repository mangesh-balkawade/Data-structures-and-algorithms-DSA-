/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 1) {
    return strs[0];
  }
  let ret = "";
  let currentIndex = 0;
  //["dog","racecar","car"]
  while (currentIndex != strs[0].length) {
    let char = strs[0][currentIndex];
    let flag = true;
    for (let str of strs) {
      if (currentIndex == str.length) {
        flag = false;
        break;
      }
      if (char != str[currentIndex]) {
        flag = false;
        break;
      }
    }
    if (!flag) {
      break;
    }
    currentIndex++;
    ret += char;
  }
  return ret;
};
