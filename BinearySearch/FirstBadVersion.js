/**
 *
 * https://leetcode.com/problems/first-bad-version/
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;
    while (start <= end) {
      let mid = start + parseInt((end - start) / 2);
      let isMidIsBad = isBadVersion(mid);
      if (isMidIsBad) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
};

// add mid also in the searching spaace bacause it might be the last bad version
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;
    while (start < end) {
      let mid = start + parseInt((end - start) / 2);
      let isMidIsBad = isBadVersion(mid);
      if (isMidIsBad) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
};
