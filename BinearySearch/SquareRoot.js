/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (no) {
  if (no < 2) {
    return no;
  }
  let left = 2;
  let right = parseInt(no / 2);
  let mid = 0;

  while (left <= right) {
    mid = parseInt((right + left) / 2);
    let squre = mid * mid;
    if (squre == no) {
      return mid;
    } else if (squre > no) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return Math.trunc(right);
};

console.log(mySqrt(6));
