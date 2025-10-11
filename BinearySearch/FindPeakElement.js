/**
 * https://leetcode.com/problems/find-peak-element/
 *
 * @param {number[]} arr
 * @return {number}
 */
var findPeakElement = function (arr) {
  if (arr.length == 1 || arr.length == 0) {
    return 0;
  }

  if (arr.length == 2) {
    if (arr[0] > arr[1]) {
      return 0;
    }
    return 1;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = start + parseInt((end - start) / 2);
    if (arr[mid + 1] > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end;
};

console.log(findPeakElement([3, 2, 1]));
