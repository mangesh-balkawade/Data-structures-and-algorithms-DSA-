//https://leetcode.com/problems/next-greater-element-ii/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
/// with doubling the array
var nextGreaterElements = function (arr) {
  let len = arr.length;
  arr = [...arr, ...arr];
  let ret = Array(len * 2).fill(-1);
  let stack = [arr[arr.length - 1]];
  ret[arr.length - 1] = -1;

  for (let index = arr.length - 2; index >= 0; index--) {
    while (stack.length) {
      if (stack[stack.length - 1] > arr[index]) {
        ret[index] = stack[stack.length - 1];
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(arr[index]);
  }
  return ret.slice(0, len);
};

// with single array but making the play with indexes by looping the array twice
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var nextGreaterElements = function (arr) {
  let len = arr.length;
  let ret = Array(len).fill(-1);
  let stack = [arr[len - 1]];

  for (let index = 2 * len - 2; index >= 0; index--) {
    while (stack.length) {
      if (stack[stack.length - 1] > arr[index % len]) {
        ret[index % len] = stack[stack.length - 1];
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(arr[index % len]);
  }
  return ret;
};

console.log(nextGreaterElements([1, 2, 3, 4, 3]));
console.log(4 % 5);
