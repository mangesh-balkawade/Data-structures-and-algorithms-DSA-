/**
 * https://leetcode.com/problems/find-k-closest-elements/description/
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  if (x <= arr[0]) {
    return arr.slice(0, k);
  }
  if (x >= arr[arr.length - 1]) {
    return arr.slice(arr.length - k);
  }

  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid + k] - x < x - arr[mid]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return arr.slice(start, start + k);
};

findClosestElements([1, 2, 3, 4, 5], 4, 3);
