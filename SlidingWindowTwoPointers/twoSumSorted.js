/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum == target) {
      return [start + 1, end + 1];
    } else if (sum < target) {
      start = start + 1;
    } else {
      end = end - 1;
    }
  }
};
