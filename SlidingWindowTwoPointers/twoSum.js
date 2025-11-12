/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }
  console.log({ map });
  for (let i = 0; i < arr.length; i++) {
    let secNo = target - arr[i];
    console.log({ secNo });
    if (map[secNo] && map[secNo] != i) {
      return [i, map[secNo]];
    }
  }
};

console.log(twoSum([1, 3, 4, 2], 6));
