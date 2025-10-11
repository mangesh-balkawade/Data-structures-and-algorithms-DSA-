/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let startIndex = -1;
  let endIndex = -1;

  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);
    if (arr[mid] == target) {
      startIndex = mid;
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  start = 0;
  end = arr.length - 1;
  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);
    if (arr[mid] == target) {
      endIndex = mid;
      start = mid + 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return [startIndex, endIndex];
};

/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let ret = [-1, -1];

  while (start < end) {
    let mid = start + parseInt((end - start) / 2);
    if (arr[mid] == target) {
      end = mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  if (arr[start] == target) {
    ret[0] = start;
  }

  start = 0;
  end = arr.length - 1;
  while (start < end) {
    let mid = start + Math.ceil((end - start) / 2);
    if (arr[mid] == target) {
      start = mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  if (arr[start] == target) {
    ret[1] = start;
  }

  return ret;
};
