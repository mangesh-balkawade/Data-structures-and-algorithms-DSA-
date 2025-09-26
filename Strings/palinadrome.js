/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  s = s.toLowerCase();
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  console.log(s);
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] != s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
