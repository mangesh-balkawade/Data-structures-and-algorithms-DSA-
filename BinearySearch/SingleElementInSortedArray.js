/**
 * https://leetcode.com/problems/single-element-in-a-sorted-array/
 *
 * @param {number[]} arr
 * @return {number}
 */
var singleNonDuplicate = function (arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);
    if (arr[mid] == arr[mid - 1] || arr[mid] == arr[mid + 1]) {
      // means mid is the element at right side and its same matching on left side
      if (arr[mid] == arr[mid - 1]) {
        // if index is even means index is at left
        if (mid % 2 == 0) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
      // same element is present at the right
      else {
        if (mid % 2 == 0) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    } else {
      return arr[mid];
    }
  }
};

// similar like above only we skip the matching element
/**
 * https://leetcode.com/problems/single-element-in-a-sorted-array/
 *
 * @param {number[]} arr
 * @return {number}
 */
var singleNonDuplicate = function (arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);
    if (arr[mid] == arr[mid - 1] || arr[mid] == arr[mid + 1]) {
      // means mid is the element at right side and its same matching on left side
      if (arr[mid] == arr[mid - 1]) {
        // if index is even means index is at left
        if (mid % 2 == 0) {
          end = mid - 2; // skip matching element
        } else {
          start = mid + 1;
        }
      }
      // same element is present at the right
      else {
        if (mid % 2 == 0) {
          start = mid + 2; // skip matching element
        } else {
          end = mid - 1;
        }
      }
    } else {
      return arr[mid];
    }
  }
};
