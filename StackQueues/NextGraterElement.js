//https://leetcode.com/problems/next-greater-element-i/description/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var nextGreaterElement = function (arr1, arr2) {
  let lastElement = arr2[arr2.length - 1];
  let map = {
    [lastElement]: -1,
  };
  let stack = [lastElement];
  for (let index = arr2.length - 2; index >= 0; index--) {
    let currentNo = arr2[index];
    if (currentNo < lastElement) {
      map[currentNo] = lastElement;
    } else {
      while (stack.length) {
        let lastStackNo = stack.pop();
        if (currentNo < lastStackNo) {
          map[currentNo] = lastStackNo;
          stack.push(lastStackNo);
          break;
        }
        map[currentNo] = -1;
      }
    }
    lastElement = currentNo;
    stack.push(lastElement);
  }
  let retArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (map[arr1[i]]) {
      retArr.push(map[arr1[i]]);
    } else {
      retArr.push(-1);
    }
  }
  return retArr;
};

console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
