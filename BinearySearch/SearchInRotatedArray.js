/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */
var search = function (arr, n) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);
    if (arr[mid] == n) {
      return mid;
    }
    // left sorted
    if (arr[start] <= arr[mid]) {
      // and present in left side
      if (n >= arr[start] && n <= arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    // right sorted
    else {
      //present in right side
      if (n >= arr[mid + 1] && n <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([6, 7, 1, 2, 3, 4, 5], 6));
