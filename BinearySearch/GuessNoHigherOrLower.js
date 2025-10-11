/**
 * https://leetcode.com/problems/guess-number-higher-or-lower/
 *
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let start = 1;
  let end = n;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    let guesedNo = guess(mid);
    if (guesedNo == 0) {
      return mid;
    } else if (guesedNo == -1) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
};
