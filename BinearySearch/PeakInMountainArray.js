/**
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * @param {number[]} arr
 * @return {number}
 */
// direct return if exists
var peakIndexInMountainArray = function (arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] >= arr[mid - 1] && arr[mid] >= arr[mid + 1]) {
      return mid;
    } else if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};

////    Left side or can be made
/**
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};
