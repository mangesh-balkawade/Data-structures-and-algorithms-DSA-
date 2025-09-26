function revStr(str) {
  let ret = "";
  for (let i = str.length - 1; i >= 0; i--) {
    ret += str[i];
  }
  return ret;
}

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let currentIndex = 0;
  let ret = "";
  while (currentIndex < s.length) {
    let sub = s.substring(currentIndex, currentIndex + k);
    ret += revStr(sub);
    currentIndex = currentIndex + k;
    ret += s.substring(currentIndex, currentIndex + k);
    currentIndex = currentIndex + k;
  }
  return ret;
};

function revStr(str) {
  let ret = "";
  for (let i = str.length - 1; i >= 0; i--) {
    ret += str[i];
  }
  return ret;
}

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let currentIndex = 0;
  let ret = "";
  while (currentIndex < s.length) {
    let sub = s.substring(currentIndex, currentIndex + k);
    ret += revStr(sub);
    currentIndex = currentIndex + k;
    ret += s.substring(currentIndex, currentIndex + k);
    currentIndex = currentIndex + k;
  }
  return ret;
};
