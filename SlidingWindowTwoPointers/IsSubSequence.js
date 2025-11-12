/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/submissions/1798600468/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let i = 0;
  while (i <= haystack.length - needle.length) {
    // instead of this use normal pointer
    if (haystack.substring(i, i + needle.length) == needle) {
      return i;
    }
    i++;
  }
  return -1;
};

function lps(str) {
  let arr = [];
  // onions
  for (let i = 0; i < str.length; i++) {
    let substr = str.slice(0, i + 1);
    let cnt = 0;
    let start = 0;
    let end = substr.length;
    let mid = start + Math.floor((end - start) / 2) + 1;
    while (mid < substr.length) {
      if (substr[start] == substr[mid]) {
        cnt++;
        start++;
        mid++;
      } else {
        break;
      }
    }
    // console.log({ substr, cnt });
    arr.push(cnt);
  }
  console.log({ arr });
  return arr;
}

// using lps and k
var strStr = function (haystack, needle) {
  let i = 0;
  let j = 0;
  let lpsArr = lps(needle);

  let startAt = 0;
  while (i < haystack.length) {
    while (haystack[i] == needle[j]) {
      // console.log({ i, j });
      j++;
      i++;
    }
    // console.log({ i, j });
    if (j == needle.length) {
      return startAt;
    } else {
      j = lpsArr[j - 1];
      startAt = j;
      i++;
    }
  }
  return -1;
};

console.log(strStr("hello", "ll"));
