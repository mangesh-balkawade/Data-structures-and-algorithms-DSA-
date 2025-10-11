/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * @param {number[]} arr
 * @return {number}
 */
var findMin = function (arr) {
  if (arr.length == 1) {
    return arr[1];
  }
  if (arr.length == 2) {
    if (arr[0] < arr[1]) {
      return arr[0];
    }
    return arr[2];
  }
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = start + parseInt((end - start) / 2);
    // left sorted
    if (arr[start] <= arr[mid]) {
      if (arr[start] < arr[mid + 1] && arr[start] < arr[end]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    // right sorted
    else {
      if (arr[mid] < arr[start] && arr[mid] < arr[mid - 1]) {
        start = mid;
      } else {
        end = mid - 1;
      }
    }
  }
  return arr[start];
};

/// approach 2
var findMin = function (arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);
    // if array is sorted return 1 element
    // condition for sorting
    if (arr[start] <= arr[end]) {
      return arr[start];
    }
    // check mid is inflection point bacuse there is only one point where mid<mid-1
    if (arr[mid] < arr[mid - 1]) {
      return arr[mid];
    }

    // check the non sorted side and element will be present there
    if (arr[start] > arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
};

// console.log(findMin([5, 1, 2, 3, 4]));

let arr = [1, 2, 3, 4, 5];
for (let i = 1; i <= 5; i++) {
  console.log({ arr });
  console.log(findMin(arr));
  arr = [...arr.slice(1), arr[0]]; // rotate left by 1
}
